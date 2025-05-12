import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';
import { EmergencyNumbers } from './EmergencyNumbers';
import { EmergencyPopup } from './EmergencyPopup';

export const EmergencyAlert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenAlert = localStorage.getItem('hasSeenEmergencyAlert');
    if (!hasSeenAlert) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenEmergencyAlert', 'true');
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-red-100 border-l-4 border-red-500 p-4 mb-8 rounded-lg shadow-md relative"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-red-200"
              aria-label="Close alert"
            >
              <X className="w-5 h-5 text-red-600" />
            </motion.button>

            <div className="flex items-start pr-8">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">Emergency Notice</h3>
                <p className="text-red-700 mt-1">
                  If you're experiencing thoughts of self-harm or having a mental health emergency:
                </p>
                <EmergencyNumbers />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
        aria-label="Emergency Help"
      >
        <AlertTriangle className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {showPopup && <EmergencyPopup onClose={() => setShowPopup(false)} />}
      </AnimatePresence>
    </>
  );
};