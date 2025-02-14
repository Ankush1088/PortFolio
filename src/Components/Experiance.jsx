import React from "react";
import html from "../assets/html.png";
import mongoDB from "../assets/mongodb.jpg";
import javascript from "../assets/javascript.png";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import node from "../assets/node.png";
import tailwindcss from "../assets/tailwindcss.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: tailwindcss, name: "Tailwind CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: mongoDB, name: "MongoDB" },
    { id: 5, logo: express, name: "Express.js" },
    { id: 6, logo: reactjs, name: "React.js" },
    { id: 7, logo: node, name: "Node.js" },
  ];

  return (
    <div name="Experience" className="max-w-screen-xl mx-auto px-6 md:px-16 py-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Experience</h1>
        <p className="text-gray-600 mt-2">
          I have over 2 years of experience working with these technologies.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-5 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={logo} className="w-20 h-20 md:w-24 md:h-24 object-contain" alt={name} />
            <p className="mt-3 text-lg font-semibold text-gray-700">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
