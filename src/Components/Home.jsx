import React from "react";
import pic from "../assets/photo.avif";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg shadow-lg py-16"
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
          <div className="flex justify-center md:justify-start space-x-2 text-4xl font-bold">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-green-400"
              strings={["Full-stack Developer","Programmer","Coder"]}
              typeSpeed={120}    // Slower typing speed
              backSpeed={70}     // Slower erasing speed
              backDelay={2000}   // Longer pause before erasing
              loop
            />
          </div>

          <p className="text-md text-gray-300 leading-relaxed">
            I'm Ankush, a passionate Full Stack Developer specializing in the
            MERN Stack. I love solving complex problems and creating scalable,
            high-performance web applications.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-5">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/ankush-singh-9708b2263/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/Ankush1088"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-900 transition"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </motion.a>
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <h1 className="font-bold text-lg text-gray-300">
              Currently Working On
            </h1>
            <div className="grid grid-cols-4 gap-5 mt-3 text-4xl">
              <DiMongodb className="text-green-500 hover:scale-110 transition" />
              <SiExpress className="text-gray-400 hover:scale-110 transition" />
              <FaReact className="text-blue-400 hover:scale-110 transition" />
              <FaNodeJs className="text-green-500 hover:scale-110 transition" />
            </div>
          </div>
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
