import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://eroderunnersclub.com/assets/erimg4-D3zjO-2I.jpg",
];

export default function SwiperImg() {
  return (
    <section className="h-full w-full flex flex-col">
      <div className="flex-1 rounded-2xl shadow-2xl overflow-hidden border-2 dark:border-[#007CC2] bg-white dark:bg-gray-900 flex flex-col">
        

        {/* Swiper Content */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, y: -40 }}
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-full w-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex justify-center items-center h-full">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="rounded-2xl object-cover w-full h-full transform transition-transform duration-[7000ms] ease-in-out scale-105"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/100 to-transparent rounded-t-2xl" />
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/100 to-transparent rounded-b-2xl" />

                  {/* Text overlays */}
                  <p className="absolute top-4 left-4 text-2xl font-bold text-white">
                    {/* Optional top title */}
                  </p>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-sm font-semibold text-white">
                      29 October 2025
                    </p>
                    <p className="text-lg font-bold text-white">
                      Erode Marathon - 2025
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom navigation buttons */}
            <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between z-10 pointer-events-none">
              <button className="swiper-button-prev bg-white text-blue-600 rounded-lg p-1 shadow hover:bg-gray-100 flex items-center justify-center pointer-events-auto">
                <ChevronLeft size={28} />
              </button>
              <button className="swiper-button-next bg-white text-blue-600 rounded-lg p-1 shadow hover:bg-gray-100 flex items-center justify-center pointer-events-auto">
                <ChevronRight size={28} />
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
    </section>
  );
}
