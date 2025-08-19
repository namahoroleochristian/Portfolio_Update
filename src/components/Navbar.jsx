import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="text-xl font-bold text-gray-800">
          Leo Christian
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About Me</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experiences</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block h-0.5 w-6 bg-gray-800"></span>
          <span className="block h-0.5 w-6 bg-gray-800"></span>
          <span className="block h-0.5 w-6 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col px-6 pb-4 space-y-4">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Me</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experiences</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
