import React from "react";
import device from "../assets/device.png";
import job from "../assets/job.png";
import payment from "../assets/payment.png";

function PortFolio() {
  const carItems = [
    {
      id: 1,
      logo: device,
      name: "Device Management",
      link: "https://real-time-device-tracker-2-tri3.onrender.com/",
      color: "from-blue-500 to-purple-500",
      description: "A real-time device tracking system for efficient management."
    },
    {
      id: 2,
      logo: job,
      name: "Job Portal",
      link: "https://www.linkedin.com/in/ankush-singh-9708b2263/",
      color: "from-blue-500 to-purple-500",
      description: "A full-stack job portal connecting employers with job seekers."
    },
    {
      id: 3,
      logo: payment,
      name: "Payment Integration",
      link: "https://payment-getway-shop.onrender.com/",
      color: "from-blue-500 to-purple-500",
      description: "Secure and seamless payment gateway integration for e-commerce."
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl w-full mx-auto px-6 md:px-24 mt-12 py-12 flex flex-col items-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
          Featured Projects
        </h1>
        <span className="text-lg font-medium text-gray-400">
          Showcasing My Best Work
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 mt-12 w-full">
        {carItems.map(({ id, logo, name, link, color, description }) => (
          <div
            key={id}
            className="p-10 shadow-xl rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center border border-white/10"
          >
            <div className="flex justify-center">
              <img
                src={logo}
                alt={name}
                className="w-96 md:w-[30rem] h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <h2
              className={`text-2xl font-semibold text-center bg-gradient-to-r ${color} text-transparent bg-clip-text mt-5`}
            >
              {name}
            </h2>
            <p className="text-gray-400 text-center text-sm mt-4 px-8">
              {description}
            </p>
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/Ankush1088"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-500 text-green-500 px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-green-500 hover:text-white hover:scale-105"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;