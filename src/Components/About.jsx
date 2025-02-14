import React from 'react';
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-6 md:px-20 my-20">
      
      {/* Header Section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <p className="text-lg text-gray-600 mt-2">Aspiring Full Stack Developer | Backend Certified</p>
      </motion.div>

      {/* About & Education Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column - About Me */}
        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500 hover:scale-[1.02] transition-all duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-green-600 flex items-center">
            <FaGraduationCap className="mr-2" /> Education & Training
          </h2>
          <p className="text-gray-700 mt-3">
            Hello, I'm <span className="font-semibold text-green-600">Ankush</span>, a passionate Web Developer currently in my 
            <strong> final year of BCA at Chandigarh University</strong>. I specialize in 
            <strong> MERN Stack Development</strong> and have successfully completed my 
            <strong> Backend Developer Certification</strong>.
          </p>
          <ul className="list-disc mt-3 ml-5 text-gray-700">
            <li>Bachelor of Computer Applications (BCA) - Chandigarh University (Final Year)</li>
            <li>Certified Backend Developer</li>
          </ul>
        </motion.div>

        {/* Right Column - Skills */}
        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 hover:scale-[1.02] transition-all duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-blue-600 flex items-center">
            <FaLaptopCode className="mr-2" /> Skills & Expertise
          </h2>
          <ul className="grid grid-cols-2 gap-3 mt-3 text-gray-700">
            <li>✅ MERN Stack (MongoDB, Express, React, Node.js)</li>
            <li>✅ C++</li>
            <li>✅ Firebase</li>
            <li>✅ Git & GitHub</li>
            <li>✅ Postman</li>
            <li>✅ REST APIs & Deployment</li>
          </ul>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.div 
        className="mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500 hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-2xl font-semibold text-purple-600 flex items-center">
            <FaBriefcase className="mr-2" /> Professional Experience
          </h2>
          <ul className="list-disc ml-5 text-gray-700 mt-3">
            <li>Freelance Backend Developer - Built scalable APIs and backend solutions.</li>
            <li>Personal Projects - Developed and deployed full-stack applications using MERN.</li>
          </ul>
        </div>
      </motion.div>

    </div>
  );
}

export default About;
