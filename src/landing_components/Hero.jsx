import React from "react";
import { motion } from "framer-motion";
import heroimage from "../assets/heroimg.webp";
import heroimagem from "../assets/heroimg.png";


export default function Hero() {
  return (
    <div className=" h-full">
      <section className="  relative flex md:flex-row flex-col bg-white rounded-3xl border-2 border-[#374291] dark:border-[#007CC2] overflow-hidden ">
        <div className="flex flex-col relative z-10 flex-grow dark:bg-black dark:text-white p-8 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm text-gray-900 inline-block pb-2 dark:bg-black dark:text-white"
          >
            <span className="font-semibold ">Erode's</span> Running Community,
            Stronger Together
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl  text-transparent bg-clip-text 
              bg-gradient-to-r from-[#007CC2] to-blue-900 dark:from-blue-100 dark:to-[#007CC2]
               drop-shadow-lg ps"
          >
            Live to Run<br />
            <span className="text-5xl text-transparent bg-clip-text 
              bg-gradient-to-r to-[#007CC2] from-blue-900 dark:to-blue-100 dark:from-[#007CC2]
              drop-shadow-lg ps ">
              Run to Live
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-lg md:text-md pt-2 text-gray-900 max-w-xl dark:bg-black dark:text-white"
          >
            Taking even a small step towards your goal is more impactful than
            standing still. Be part of a community that moves together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex md:flex-row flex-col gap-4 mt-4 mx-auto md:mx-0"
          >
            <a className="dark:bg-black dark:text-white w-48 px-5 py-2 text-sm font-semibold text-white text-center bg-[#007CC2] border-2 border-blue-900 rounded-xl hover:bg-[#007cc2] transition-colors duration-200"
            href="https://erodemarathon.com"
                        target="_blank"
                        rel="noopener noreferrer">
              Register Now
            </a>

            <button
              onClick={() =>
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
              }
              className="dark:bg-black dark:text-white w-48 px-5 py-2 text-sm font-semibold text-[#007cc2] border-2 border-[#007cc2] rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
            >
              Contact Us
            </button>
          </motion.div>
         
        </div>

        {/* Hero Image */}
        
        

        <div className="w-full overflow-hidden relative flex-grow md:rounded-r-2xl rounded-br-2xl dark:bg-black dark:text-white">
          <div className="absolute top-0 left-0 md:w-64 w-full md:h-full h-16 md:bg-gradient-to-r bg-gradient-to-b from-white/100 dark:from-black/100 to-transparent "></div>
          <motion.img
            src={heroimagem}
            alt="Hero runners"
            loading="eager"
            decoding="async"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-full object-cover "
          />
        </div>
      </section>
    </div>
  );
}