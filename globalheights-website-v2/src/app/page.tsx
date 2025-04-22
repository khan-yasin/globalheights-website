import { motion } from "framer-motion";
import WeatherWidget from "@/app/components/WeatherWidget";
import MapComponent from "@/app/components/MapComponent";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold">Global Heights Construction</h1>
          <p className="text-xl">Building Tomorrow's Landmarks Today</p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Project {project}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Weather Widget */}
      <WeatherWidget />

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <MapComponent />
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.main>
  );
}

function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          aria-required="true"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg"
          aria-required="true"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}