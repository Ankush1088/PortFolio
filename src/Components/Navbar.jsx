import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      {/* Full-width Navbar */}
      <div className="fixed top-0 left-0 right-0 w-full h-16 backdrop-blur-lg bg-white/70 shadow-md z-50">
        <div className="w-full px-4 md:px-20 flex justify-between items-center h-full">
          
          {/* Logo */}
          <h1 className="font-bold text-2xl cursor-pointer text-gray-800">
            Ankush<span className="text-green-500 text-3xl">.</span>
          </h1>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
            {navItems.map(({ id, text }) => (
              <li key={id} className="hover:text-blue-600 cursor-pointer transition-all duration-300">
                <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer text-gray-700 z-50">
            {menu ? <IoClose size={35} /> : <MdMenu size={35} />}
          </div>
        </div>
      </div>

      {/* Background Blur Effect for Mobile Menu */}
      <div
        className={`fixed inset-0 transition-opacity duration-300 z-40 md:hidden 
          ${menu ? "bg-gray-900/80 backdrop-blur-lg flex items-center justify-center" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenu(false)}
      >
        {/* Mobile Navbar (Blurred Background without White Box) */}
        <div
          className={`w-2/3 p-8 transition-transform duration-300 text-center 
          ${menu ? "scale-100 text-white" : "scale-90 opacity-0 pointer-events-none"}`}
        >
          <ul className="space-y-6 text-lg font-semibold">
            {navItems.map(({ id, text }) => (
              <li key={id} className="hover:text-green-400 transition-all duration-300 cursor-pointer">
                <Link onClick={() => setMenu(false)} to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
