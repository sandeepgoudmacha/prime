import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { EmotionSelector } from "./components/EmotionSelector";
import { ActivityCard } from "./components/ActivityCard";
// import { LoginForm } from "./components/auth/LoginForm";
import { EmotionLogger } from "./components/EmotionLogger";
import { EmotionLogList } from "./components/EmotionLogList";
import { EmergencyAlert } from "./components/alerts/EmergencyAlert";
import { ActivityPage } from "./pages/ActivityPage";
import { activities } from "./data/activities";
import type { Emotion, EmotionLog } from "./types";
import { Sparkles } from "lucide-react";

function App() {
  // const [user, setUser] = useState<User | null>(null);
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [emotionLogs, setEmotionLogs] = useState<EmotionLog[]>([]);

  const recommendedActivities = selectedEmotion
    ? activities.filter((activity) => activity.emotions.includes(selectedEmotion))
    : [];

  // const handleLogin = (data: { email: string; password: string }) => {
  //   setUser({ email: data.email, name: data.email.split("@")[0] });
  // };

  const handleLogEmotion = (log: EmotionLog) => {
    setEmotionLogs((prev) => [...prev, log]);
  };

  // if (!user) {
  //   return (
  //     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
  //       <LoginForm onLogin={handleLogin} />
  //     </div>
  //   );
  // }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-br from-red-500 via-white to-red-300">

              <div className="container mx-auto px-4 py-8">
                <EmergencyAlert />
                
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <div className="flex items-center justify-center mb-4">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 10 }}
                    >
                      <Sparkles className="w-10 h-10 text-blue-500" />
                    </motion.div>
                    <h1 className="text-5xl font-extrabold text-gray-800 ml-3">
                      PrimeMedic AI - Emotional well-being Tool
                    </h1>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Welcome! Let's track your emotions and find moments
                    of bliss.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
                    >
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                        How are you feeling today?
                      </h2>
                      <EmotionSelector
                        selectedEmotion={selectedEmotion}
                        onSelect={setSelectedEmotion}
                      />
                    </motion.div>

                    {selectedEmotion && (
                      <>
                        <EmotionLogger
                          emotion={selectedEmotion}
                          onLog={handleLogEmotion}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-6"
                        >
                          <h2 className="text-2xl font-semibold text-gray-800">
                            Recommended Activities
                          </h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {recommendedActivities.map((activity) => (
                              <ActivityCard key={activity.id} activity={activity} />
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>

                  <div className="lg:col-span-1">
                    <EmotionLogList logs={emotionLogs} />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/activity/:type/:id" element={<ActivityPage />} />
      </Routes>
    </Router>
  );
}

export default App;