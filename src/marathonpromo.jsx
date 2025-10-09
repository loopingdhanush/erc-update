import React from "react";
import { motion } from "framer-motion";
import marathonPoster from "./assets/em-25.jpg";

export default function MarathonPromo() {
  return (
    <div>
      <h2 className="text-xl md:text-xl font-bold dark:text-blue-300 text-[#374291] mb-2 ml-4 ">
        Upcoming Event  
      </h2>
    <motion.div
      className="relative h-full bg-white rounded-2xl border shadow-lg overflow-hidden w-[400px] h-[400px]"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      
      {/* Poster */}
      <img
        src={marathonPoster}
        alt="Erode Marathon 2025"
        className="w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Overlay with CTA */}
      <div className="absolute bottom-0 left-0  bg-black/50 backdrop-blur-md p-4  flex flex-col items-start justify-end rounded-tr-3xl">
        {/* Text */}
        
          <h3 className="text-md md:text-xl font-bold text-white">
            Erode Marathon 2025
          </h3>
          <p className="text-sm font-bold text-white">
            November 9, 2025
          </p>
        

        {/* Button */}
        <a
          href="https://erodemarathon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-300 text-black px-4 py-2 mt-2 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition"
        >
          Register Now
        </a>
      </div>
    </motion.div></div>
  );
}