import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';

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
      <div className='fixed top-0 left-0 right-0 w-full h-16 backdrop-blur-lg bg-white/70 shadow-md z-50'>
        <div className='w-full px-4 md:px-20 flex justify-between items-center h-full'>
          
          {/* Logo */}
          <h1 className='font-bold text-2xl cursor-pointer text-gray-800'>
            Ankush<span className='text-green-500 text-3xl'>.</span>
          </h1>

          {/* Desktop Navbar */}
          <ul className='hidden md:flex space-x-8 text-lg font-medium text-gray-700'>
            {navItems.map(({ id, text }) => (
              <li key={id} className='hover:text-blue-600 cursor-pointer transition-all duration-300'>
                <Link 
                  to={text} 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer text-gray-700 z-50'>
            {menu ? <IoClose size={35} /> : <MdMenu size={35} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar + Blur Effect ONLY for `md` and smaller screens */}
      {menu && (
        <>
          {/* Background Blur Effect (Only for md and smaller screens) */}
          <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden" onClick={() => setMenu(false)}></div>

          {/* Mobile Menu */}
          <div className='absolute top-16 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-50 md:hidden'>
            <ul className='flex flex-col items-center space-y-6 py-10 text-lg font-semibold text-gray-700'>
              {navItems.map(({ id, text }) => (
                <li key={id} className='hover:text-blue-600 transition-all duration-300 cursor-pointer'>
                  <Link 
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
