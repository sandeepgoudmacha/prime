import React from 'react';
import { Phone } from 'lucide-react';

export const EmergencyNumbers = () => (
  <div className="mt-2">
    <div className="flex items-center">
      <Phone className="w-5 h-5 text-red-600 mr-2" />
      <span className="font-bold text-red-800">Call 911 immediately</span>
    </div>
    <div className="mt-2 text-red-700">
      Additional Resources:
      <ul className="list-disc ml-5 mt-1">
        <li>National Suicide Prevention Lifeline: 988</li>
        <li>Crisis Text Line: Text HOME to 741741</li>
      </ul>
    </div>
  </div>
);