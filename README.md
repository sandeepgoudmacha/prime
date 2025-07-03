![Screenshot 2025-01-17 193729](https://github.com/user-attachments/assets/ae81ca62-6050-4f7e-b25d-d8e8413591bb)


**Watch Video:** https://vimeo.com/1055990516
## Inspiration
Healthcare accessibility remains a significant challenge worldwide, especially in remote and underserved areas. The long wait times, lack of language support, and inability to monitor health effectively inspired us to create **Prime Medic AI**. Our goal is to use technology to bridge the gap between individuals and quality healthcare services, empowering users to take control of their health from the comfort of their homes.

## 💡 What It Does

Prime Medic AI is an **end-to-end virtual health assistant** that leverages computer vision, NLP, and real-time APIs to deliver the following features:

### 🩺 AI-Powered Diagnostics
- **Multilingual Chatbot**: A chatbot to which a user can ask anything to enhance his/her safety in any situation.
- **Symptom Analysis via AI Cam**: Users describe or show symptoms through camera input. Our model detects visible injuries or anomalies and analyzes speech for context.
- **X-Ray Scan Analysis**: Upload chest, hand, or fracture X-rays and get fast, accurate AI-based predictions for common ailments like pneumonia, fractures, and arthritis.
- **Disease Prediction Models**: Input basic data and get predictions on chronic diseases including:
  - Diabetes
  - Liver Disease
  - Stroke
  - Heart Disease
  - Kidney Disease
  - Pneumonia

### 🧘 Mental & Emotional Well-being
- **AI Mood Detection**: Real-time facial expression + tone analysis to detect stress, anxiety, or low mood. Mood Tracker with Music Therapy - Suggests calming music, positive content, or books counseling sessions (Agentic AI expansion).
- **Mental Health Self-Tests**: Short validated assessments for depression, anxiety, and stress with actionable advice.
- **Mindfulness Support**: Breathing exercises, calming music, and AI-curated positive content.

### 🌍 Accessibility & Multilingual Support
- Multilingual chatbot & speech interface using **Google Translate API** and NLP pipelines (supports 15+ languages).
- Voice-to-text and text-to-speech interactions with regional language support.
- Designed with **accessibility-first** UI: high contrast, voice feedback, and keyboard navigation.

### 🛒 Ecosystem Integration
- **Voice-Based Appointment Booking**: Users can schedule appointments at nearby clinics using natural, multilingual speech—no typing required.
- **Smart Clinic Discovery & Availability Check**: Uses Google Maps API, geolocation, and real-time database/API integration to identify clinics and fetch available slots.
- **AI-Powered Understanding & Timezone Handling**: Leverages Whisper/DeepSpeech + BERT to comprehend user intent, manage errors gracefully, and adjust appointments for timezones.
- **Confirmation & Notifications**: Captures patient info and sends booking confirmations and reminders via Twilio SMS, email, or in-app alerts.
- **Medicine Ordering System**: Connects with local pharmacies or online APIs.
- **Doctor Consultations**: Video call scheduling with nearby clinics.
- **Wearable Sync**: Real-time syncing with fitness trackers (heart rate, steps, sleep).
- **Geolocation-based Hospital Finder**: Nearby emergency centers with directions and contact info.
- **Blogs & Expert Content**: Curated, medically reviewed articles to raise awareness and promote preventive care.
- **Yoga & Fitness Modules**: Guided wellness sessions with AI-personalized routines.
- **Psychological Services for Mental Health Healing**: Meet Some Free Mental Health Experts


## Web
![Screenshot 2025-01-06 171228](https://github.com/user-attachments/assets/261f28c0-dfce-4d3f-afae-cccf6ae252e2)

## App
![WhatsApp Image 2025-01-18 at 6 27 48 PM](https://github.com/user-attachments/assets/fe5827f8-7dec-4025-be55-684d7691dddb)

![WhatsApp Image 2025-01-18 at 6 27 49 PM (3)](https://github.com/user-attachments/assets/39b742c9-0cc4-4941-9ced-5c190f7016bb)
![WhatsApp Image 2025-01-18 at 6 27 49 PM (1) (1)](https://github.com/user-attachments/assets/95a067fe-9b2c-4f78-927f-63253ae4f5dc)

| Component        | Tech Stack / Tools |
|------------------|--------------------|
| **Frontend**     | ReactJS, TailwindCSS, Material UI |
| **Backend**      | Flask + FastAPI (dual routing for API and ML services) |
| **AI/ML Models** | TensorFlow, PyTorch, OpenCV, Scikit-learn |
| **Databases**    | PostgreSQL (structured data), Firebase (user auth + storage) |
| **APIs Used**    | Google Translate, Twilio, OpenWeatherMap, Geolocation, MedNLP, Groq |
| **Cloud & Hosting** | AWS EC2, S3, Lambda, Streamlit for model visualization |
| **Mobile App**   | React Native (cross-platform deployment) |

## 🌍 Social Impact
- Can be deployed in **rural clinics, schools, or health kiosks** to improve access.
- Supports **elderly and non-English speaking users** through voice-based interaction.
- Reduces **mental health stigma** by offering a private, AI-powered check-in tool.
- Enables **early detection** and reduces the load on public hospitals through triaging.
