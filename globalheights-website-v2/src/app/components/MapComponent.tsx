'use client';

import { motion } from "framer-motion";

export default function MapComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-[400px] bg-gray-100 rounded-xl overflow-hidden relative"
      aria-label="Map Section"
    >
      {/* Placeholder Map Image */}
      <img
        src="/map-placeholder.jpg"
        alt="Map placeholder"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay Message */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-lg mb-4">Enable live map with Google Maps API</p>
          <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Activate Map
          </button>
        </div>
      </div>
    </motion.div>
  );
}