import React from "react";
import { motion } from "framer-motion";
import heroimage from "../assets/heroimg.webp";
import heroimagem from "../assets/heroimg.png";


export default function Hero() {
  return (
    <div className=" h-full">
      <section className="relative flex flex-col bg-gradient-to-t from-white to-white rounded-3xl border-2 border-[#374291] dark:border-[#007CC2] overflow-hidden h-full">
        <div className="pt-12 px-6 flex flex-col relative z-10 flex-grow dark:bg-black dark:text-white">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-md text-gray-900 mb-2 inline-block mx-auto text-center dark:bg-black dark:text-white"
          >
            <span className="font-semibold ">Erode's</span> Running Community,
            Stronger Together
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl text-transparent bg-clip-text 
              bg-gradient-to-r from-[#007CC2] to-blue-900 dark:from-blue-100 dark:to-[#007CC2]
              text-center drop-shadow-lg ps"
          >
            Live to Run<br />
            <span className="text-5xl md:text-7xl text-transparent bg-clip-text 
              bg-gradient-to-r to-[#007CC2] from-blue-900 dark:to-blue-100 dark:from-[#007CC2]
              text-center drop-shadow-lg ps ">
              Run to Live
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-lg mt-5 md:text-xl text-gray-900 max-w-xl mx-auto text-center dark:bg-black dark:text-white"
          >
            Taking even a small step towards your goal is more impactful than
            standing still. Be part of a community that moves together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8 mx-auto justify-center items-center"
          >
            <a className="dark:bg-black dark:text-white w-48 px-5 py-2 text-sm font-semibold text-white text-center bg-[#007CC2] border-2 border-blue-900 rounded-xl hover:bg-[#007cc2] transition-colors duration-200"
            href="https://erodemarathon.com"
                        target="_blank"
                        rel="noopener noreferrer">
              Erode Marathon 2025
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
        <div className="w-full overflow-hidden relative flex-grow rounded-b-2xl pt-10 dark:bg-black dark:text-white">
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