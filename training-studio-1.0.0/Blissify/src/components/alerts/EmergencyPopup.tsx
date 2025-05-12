import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';
import { EmergencyNumbers } from './EmergencyNumbers';

interface EmergencyPopupProps {
  onClose: () => void;
}

export const EmergencyPopup = ({ onClose }: EmergencyPopupProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
  >
    <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-2 right-2 p-2 rounded-full hover:bg-red-100"
      >
        <X className="w-5 h-5 text-gray-500" />
      </motion.button>

      <div className="flex items-start mb-4">
        <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-semibold text-red-800">Emergency Help</h3>
          <p className="text-red-700 mt-2">
            If you're experiencing thoughts of self-harm or having a mental health emergency:
          </p>
          <EmergencyNumbers />
        </div>
      </div>
    </div>
  </motion.div>
);