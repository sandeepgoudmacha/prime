# # Multimodal demo
#
# This is an example of how to simulate a video- and audio-aware model using existing LLM vision models (that take text and images as input, and generate text as output).

import os
from pathlib import Path
from typing import Any

import dotenv
from groq import Groq
from shiny import ui
from gtts import gTTS

from media_extractor import split_video
import datauri


# Load OpenAI API key from .env file
dotenv.load_dotenv()
if os.environ.get("GROQ_API_KEY") is None:
    raise ValueError("GROQ_API_KEY not found in .env file")

client = Groq()


# This is the input video that we'll turn into the user prompt.

def chat(video_file: str, messages: list[Any], progress: ui.Progress) -> str:

    # At the time of this writing, the GPT-4o API doesn't directly support video or audio input. Instead, we'll decode the video into frames and feed them to the model as images, and decode the audio into text and feed it to the model as text.

    progress.set(message="Splitting video into audio and images...", value=0)
    audio_uri, image_uris = split_video(video_file)

    # Decode the audio file into text, using OpenAI's `whisper-1` model. The result will serve as the text prompt for the LLM.

    progress.set(message="Transcribing audio...", value=0.1)
    with datauri.as_tempfile(audio_uri) as audio_file:
        transcription = client.audio.transcriptions.create(
            model="whisper-large-v3-turbo", file=Path(audio_file)
        )

    user_prompt = transcription.text

    # We're ready to talk to the LLM: use the text and images as input, and get generated text back.

    messages.append(
        {
            "role": "user",
            "content": [
                {"type": "text", "text": user_prompt},
                *[
                    {
                        "type": "image_url",
                        "image_url": {"url": image_uris, "detail": "auto"},
                    }
                    if image_uris else {},
                ],
            ],
        }
    )

    progress.set(message="Chatting...", value=0.2)
    response = client.chat.completions.create(
        model="llama-3.2-11b-vision-preview",
        messages=[
            *messages,
        ],
    )
    response_text = response.choices[0].message.content
    messages.append(response.choices[0].message)

    # Use OpenAI's text-to-speech model to turn the generated text into audio.

    # progress.set(message="Synthesizing audio...", value=0.8)
    # audio = client.audio.speech.create(
    #     model="tts-1",
    #     voice="nova",
    #     input=response_text or "",
    #     response_format="mp3",
    # )

    audio = gTTS(text = response_text, lang='en')
    response_audio_uri = datauri.from_bytes(audio.read(), "audio/mpeg")
    print(response_audio_uri)
    return response_audio_uri
