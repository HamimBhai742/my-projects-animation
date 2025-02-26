import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        <span className="text-red-500">Get</span> in Touch
      </h1>
      <p className="text-gray-600 text-lg text-center max-w-md">
        Have a question or want to work together? Feel free to reach out!
      </p>

      {/* Contact Form & Info */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl grid md:grid-cols-2 gap-6">
        {/* Contact Info Section */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 text-gray-700">
            <FaPhone className="text-red-500 text-2xl" />
            <span>+880 1926313093</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <span>mdhamim5088@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-green-500 text-2xl" />
            <span>Dhaka, Bangladesh</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 text-2xl transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 text-2xl transition"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
