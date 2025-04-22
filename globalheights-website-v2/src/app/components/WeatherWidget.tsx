'use client';

import { motion } from "framer-motion";

export default function WeatherWidget() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto my-16 p-6 bg-white rounded-xl shadow-lg"
      role="region"
      aria-label="Weather Information"
    >
      <h2 className="text-2xl font-semibold mb-4">Current Weather</h2>
      <div className="flex items-center gap-4">
        <div className="text-4xl">☀️</div>
        <div>
          <p className="text-3xl font-bold">24°C</p>
          <p className="text-gray-600">Sunny</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Weather data will be displayed here once API is connected
      </p>
    </motion.div>
  );
}