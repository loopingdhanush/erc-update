import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import erimg1 from "../assets/erimg1.jpg";
import erimg2 from "../assets/erimg2.jpg";
import erimg3 from "../assets/erimg3.jpg";
import erimg4 from "../assets/erimg4.jpg";
import erimg5 from "../assets/erimg5.jpg";
import erimg6 from "../assets/erimg6.jpg";
import erimg7 from "../assets/erimg7.jpg";
import erimg8 from "../assets/erimg8.jpg";
import erimg9 from "../assets/erimg9.jpg";
import erimg10 from "../assets/erimg10.jpg";
import erimg11 from "../assets/erimg11.jpg";
import erimg12 from "../assets/erimg12.jpg";
import erimg13 from "../assets/erimg13.jpg";
import erimg14 from "../assets/erimg14.jpg";
import erimg15 from "../assets/erimg15.jpg";
import erimg16 from "../assets/erimg16.jpg";
import aboutus from "../assets/aboutus.jpg";

const useCountUp = (end, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default function About({ id }) {
  const members = useCountUp(200, 2);
  const marathons = useCountUp(5, 2);
  const years =  useCountUp(9, 2);

  const images1 = [erimg1, erimg12, erimg3, erimg4, erimg5, erimg6, erimg7, erimg8];
  const images2 = [erimg9, erimg10, erimg11, erimg2, erimg13, erimg14, erimg15, erimg16];

  return (
    <div className="mx-4">
      <section id={id} className="relative py-16 mt-8 px-4 max-w-7xl mx-auto rounded-3xl overflow-hidden">
        
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={aboutus}
          alt="About us background"
        />

        
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 rounded-t-2xl"></div>

      
        <div className="relative z-10 max-w-6xl text-white flex flex-col mx-auto items-center">
        
          <h1 className="text-md mx-4 md:text-2xl font-normal kollektif-font text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200 pb-2 text-shadow-lg text-shadow-black">
            About Us
          </h1>
          <h1 className="text-3xl mx-4 md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400 mb-8 pb-2 text-shadow-sm">
            The Journey of Erode Runners
          </h1>

          <p className="text-gray-100 mx-4 text-lg font-semibold text-shadow-xl">
            <span className="bg-blue-500">Erode Runners Club</span>  is a not-for-profit community that began as an informal group of passionate runners in 2016 and became a registered club in 2020. What started with a handful of enthusiasts has now grown into a vibrant running community that brings together people from all walks of life to celebrate fitness, friendship, and the joy of running.
            <br /><br />
            Our members have <span className="bg-blue-500">represented Erode in marathons and ultra marathons across India</span>, carrying the spirit of our city wherever they run.
            <br /><br />
            At the heart of Erode Runners Club is a simple belief, Running is for everyone. We are driven by the motto <span className="bg-blue-500">" By The Runners, For The Runners "</span> and our mission is to inspire more people to take their first step towards fitness.
          </p>

         
          <div className="mt-12  mx-4 gap-6 grid sm:grid-cols-3 ">
            {[
              { value: years, label: "Years of Community Running", },
              { value: members, label: "Active Members", },
              { value: marathons, label: "Marathon Events Hosted",  },
             
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-all flex flex-col items-center gap-3 border border-gray-100 dark:border-blue-600 dark:bg-gradient-to-br dark:from-black/60 dark:to-blue-900/30"
              >
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#374291] to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-200">
                  {stat.value}+
                </h2>
                <p className="text-gray-700 font-semibold dark:text-blue-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Carousel Section */}
      <div className="mt-16 max-w-7xl mx-auto">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          {images1.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md mx-2 w-64 h-48 overflow-hidden"
            >
              <img
                src={img}
                alt={`Runner ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mt-4 max-w-7xl mx-auto">
        <Marquee speed={50} gradient={false} pauseOnHover={true} direction="right">
          {images2.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md mx-2 w-64 h-48 overflow-hidden"
            >
              <img
                src={img}
                alt={`Runner ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}