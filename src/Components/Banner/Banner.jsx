import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    document.title = "Welcome to Our Website";
  }, []);
  const [text] = useTypewriter({
    words: [" Welcome to Our Website 🚀"],
    loop: 0,
  });
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/Peta.mp4" type="video/mp4" />
      </video>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          {text}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-xl"
        >
          Explore stunning animations, smooth interactions, and immersive
          designs built with React & Tailwind CSS.
        </motion.p>

        {/* Animated Button */}
        <Link
          to="/3D"
          className="animate-wiggle-more animate-infinite animate-duration-1000 animate-delay-1000 mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
