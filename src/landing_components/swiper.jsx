import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {motion} from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";


const images = [
  "https://eroderunnersclub.com/assets/erimg4-D3zjO-2I.jpg"
];

export default function SwiperImg() {
  return (
 <div className="h-full w-full max-w-[400px] flex flex-col justify-center items-center md:items-normal mx-auto">
  <h2 className="text-xl md:text-xl font-bold dark:text-blue-300 text-[#374291] mb-2 ml-4 ">
      Featured Events 
  </h2>
  <motion.div
    className="h-full rounded-2xl max-w-[400px] max-h-[400px] shadow-2xl relative overflow-hidden md:mx-0"
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop
        className="h-full"
        autoplay={{
    delay: 3000,      
    disableOnInteraction: false, // autoplay after manual swipe
  }}

      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
  <div className="relative flex justify-center items-center h-full">
    <img
      src={src}
      alt={`Slide ${index + 1}`}
      className="rounded-2xl object-cover w-full h-full transform transition-transform duration-[7000ms] ease-in-out scale-105 "
    />

    
   
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/100 to-transparent rounded-t-2xl"></div>
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/100 to-transparent rounded-b-2xl"></div>
    <p className=" absolute top-4 left-4 text-2xl font-bold text-white"></p>
    <div className="absolute bottom-4 left-4">
        <p className=" text-sm font-semibold text-white">29 October 2025</p>
        <p className=" text-lg font-bold text-white">Erode Marathon - 2025 </p>
    </div>
  </div>
</SwiperSlide>

        ))}

        <div className="absolute bottom-8 right-12 flex gap-2 z-10">
            
          <button className="swiper-button-prev bg-white text-blue-600 rounded-lg p-1 shadow hover:bg-white flex items-center justify-center">
            <ChevronRight size={40} />
          </button>
          <button className="swiper-button-next bg-white text-blue-600 rounded-lg p-1 full shadow hover:bg-white flex items-center justify-center">
            <ChevronLeft size={40} />
          </button>
          
        </div>
      </Swiper>

   
      <style>
        {`
          .swiper-button-prev::after,
          .swiper-button-next::after {
            display: none !important;
          }
        `}
      </style>
    </motion.div>
    </div>
  );
}
