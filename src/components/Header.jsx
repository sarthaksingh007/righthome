"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing Font Awesome for hamburger icon
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import img from "./../assets/logo.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between px-5 py-3  fixed w-full top-0 bg-white z-20">
      {/* Left side - Logo */}

      <Image src={img} className="sm:w-[9%] w-[30%]" />

      <nav className="hidden md:flex space-x-8 text-black">
        <a href="#" className="hover:text-blue-500">
          Overview
        </a>
        <a href="#" className="hover:text-blue-500">
          Blogs
        </a>
        <a href="#" className="hover:text-blue-500">
          About Us
        </a>
        <a href="#" className="hover:text-blue-500">
          Contact
        </a>
      </nav>

      {/* Right side - Sign-up button */}
      <div className="hidden md:flex">
        <button>Sign In</button>
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu (Slide-in from the right) */}
      <div
        className={`fixed top-0 right-0 w-64 bg-[#23201D] h-full p-5 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button onClick={toggleMenu} className="text-white text-3xl">
          <AiOutlineClose />
        </button>
        <nav className="mt-10 space-y-6 text-white">
          <a href="#" className="block hover:text-gray-300">
            Overview
          </a>
          <a href="#" className="block hover:text-gray-300">
            Blogs
          </a>
          <a href="#" className="block hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="block hover:text-gray-300">
            Contact
          </a>
          <button className="bg-white text-[#23201D] px-4 py-2 mt-4 w-full rounded-md hover:bg-gray-100">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}
