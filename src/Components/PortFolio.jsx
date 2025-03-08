import React from "react";
import java from "../assets/java.png";
import python from "../assets/python.webp";
import mongoDB from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import node from "../assets/node.png";

function PortFolio() {
  const carItems = [
    { id: 1, logo: mongoDB, name: "MongoDB" },
    { id: 2, logo: express, name: "Express" },
    { id: 3, logo: reactjs, name: "ReactJS" },
    { id: 4, logo: node, name: "NodeJS" },
    { id: 5, logo: python, name: "Python" },
    { id: 6, logo: java, name: "Java" },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-bold mb-5 text-gray-800">Portfolio</h1>
        <span className="text-lg font-semibold text-gray-600">
          Featured Projects
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {carItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="p-6 bg-white/80 shadow-lg rounded-lg backdrop-blur-lg flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={logo}
                alt={name}
                className="w-24 h-24 object-contain mb-4"
              />
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-500 text-sm mt-2 px-4">
                  A powerful technology used in modern web development.
                </p>
              </div>
              <div className="flex space-x-4 mt-5">
                {/* ✅ "Site-Visit" ka button */}
                <a
                  href="https://www.linkedin.com/in/ankush-singh-9708b2263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:scale-105 flex justify-center items-center"
                >
                  Site Visit
                </a>

                {/* ✅ "Source Code" ka button (GitHub link) */}
                <a
                  href="https://github.com/Ankush1088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md transition duration-300 hover:bg-green-600 hover:scale-105 flex justify-center items-center"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
