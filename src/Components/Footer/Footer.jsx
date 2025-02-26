import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-700 text-white py-8 mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Side: Brand Name with Glow Effect */}
        <h2 className="text-2xl font-bold tracking-wide">
          <span className="text-indigo-500">HA</span>
          <span className="text-rose-400 glow-effect">MIM</span>
        </h2>

        {/* Center: Navigation Links with Cool Hover Effect */}
        <nav className="flex space-x-5 text-sm md:text-base my-4 md:my-0">
          {["Home", "About", "2D", "3D", "Contact", "Privacy", "Terms"].map(
            (item, index) => (
              <motion.a
                key={index}
                href="#"
                className="relative group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
              </motion.a>
            )
          )}
        </nav>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-rose-500 transition duration-300"
                whileHover={{ rotate: 25 }}
              >
                <Icon className="text-white text-2xl" />
              </motion.a>
            )
          )}
        </div>
      </div>

      {/* Bottom Section: Copyright with Animated Fade */}
      <motion.div
        className="text-center text-sm text-gray-400 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        © {new Date().getFullYear()} HAMIM. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
