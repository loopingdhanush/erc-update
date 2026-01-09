import { useState, useEffect } from "react";
import logoFull from "../assets/main_club_logo.png";
import { motion } from "framer-motion";
import lightmode from "../assets/lightmode.png";
import darkmode from "../assets/darkmode.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem("darkMode");
  if (saved !== null) return saved === "true";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
});

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".relative")) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Curved Navbar */}
      <div
        className="z-50"
      
      >
        <div className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-${ isOpen ? 49 : 50 } w-[99.9%] max-w-7xl px-2 `}>
          <div className="relative bg-white/80 dark:bg-black/40 dark:text-white backdrop-blur-md shadow-lg border border-[#374291]/30 dark:border-blue/80 rounded-2xl px-6 py-2 flex justify-between items-center h-16 px-4 ">
            
            

            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center text-sm space-x-4 text-[#007cc2] dark:text-blue-300 dark:font-bold font-semibold " >
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className=" border- border-gray-800 dark:border-blue-300  pr-4"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("about")}
                className=" border- border-gray-800 dark:border-blue-300 pr-4"
              >
                About Us
              </button>
              <button
                onClick={() => scrollTo("benefits")}
                className="pr-4"
              >
                Benefits
              </button>

            </div>

            <img 
              onClick={() => setDarkMode(!darkMode)}  src={darkMode ? lightmode : darkmode}
              className=" lg:hidden text-sm dark:bg-black dark:text-white font-semibold  text-gray-600 border p-2 border-gray-600 bg-white shadow-sm hover:shadow-lg transition duration-300 ease-in-out rounded-xl h-10 w-10">            
            </img>

            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={logoFull} className="h-12 rounded-full dark:brightness-150 drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] " alt="Logo" />
            </a>

            {/* Desktop Contact */}
            <div className="flex flex-row">
            <button
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
              className="hidden dark:bg-black dark:text-blue-200 lg:block text-sm font-semibold text-[#007cc2] border-2 hover:bg-blue-100 border-[#007cc2] shadow-md hover:shadow-lg transition duration-300 ease-in-out rounded-xl px-4 py-1 h-8"
            >
              Contact Us
            </button>

            <img 
            onClick={() => setDarkMode(!darkMode)}  src={darkMode ? lightmode : darkmode}
            className="hidden lg:block text-sm dark:bg-black dark:text-white font-semibold p-1  text-gray-600 border-2 border-[#007cc2] shadow-md hover:shadow-lg transition duration-300 ease-in-out rounded-xl h-8 w-8 ml-4 hover:cursor-pointer">            
            </img>

            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center ">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-600 dark:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white text-black dark:bg-black dark:text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 p-6 flex flex-col gap-4`}
      >
        <button onClick={() => setIsOpen(false)} className="mb-4 self-end">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile buttons */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-medium cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={() => scrollTo("about")}
          className="font-medium cursor-pointer"
        >
          About Us
        </button>

        <button
          onClick={() => scrollTo("benefits")}
          className="font-medium cursor-pointer"
        >
          Benefits
        </button>

        

        <button
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          className="font-semibold w-fit mx-auto text-[#007cc2] border-2 border-[#007cc2] bg-blue-100 dark:bg-black dark:text-white shadow-sm hover:shadow-lg transition duration-300 ease-in-out rounded-xl px-4 py-1"
        >
          Contact Us
        </button>

        

        
      </div>
    </>
  );
}
