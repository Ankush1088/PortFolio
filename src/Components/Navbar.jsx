import React, { useState } from "react";
import pic from "../assets/photo.avif";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { motion } from "framer-motion";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      name="Home"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg shadow-lg py-16 relative"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 text-center md:text-left px-6"
        >
          <span className="text-lg font-medium text-gray-300">
            Welcome to My Feed
          </span>
          <div className="flex justify-center md:justify-center space-x-2 text-4xl font-bold">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-green-400"
              strings={["Full-Stack Developer", "Programmer", "Coder"]}
              typeSpeed={100} // Slower typing speed
              backSpeed={60} // Slower erasing speed
              backDelay={2000} // Longer pause before erasing
              loop
            />
          </div>

          <p className="text-md text-gray-300 leading-relaxed">
            I'm Ankush, a passionate Full Stack Developer specializing in the
            MERN Stack. I love solving complex problems and creating scalable,
            high-performance web applications.
          </p>

          {/* Centered Menu Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-green-500 px-6 py-3 rounded-lg text-lg font-bold hover:bg-green-600 transition"
            >
              Toggle Menu
            </button>
          </div>

          {/* Centered Menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-5 rounded-lg shadow-lg text-center w-80"
            >
              <p className="text-xl font-bold">Menu</p>
              <ul className="space-y-3 mt-3">
                <li className="cursor-pointer hover:text-green-400">Home</li>
                <li className="cursor-pointer hover:text-green-400">About</li>
                <li className="cursor-pointer hover:text-green-400">Projects</li>
                <li className="cursor-pointer hover:text-green-400">Contact</li>
              </ul>
              <button
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Close
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <img
            src={pic}
            className="rounded-full md:w-[350px] md:h-[350px] shadow-lg border-4 border-gray-600 hover:scale-105 transition"
            alt="Developer-Image"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
