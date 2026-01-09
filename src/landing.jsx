import { useEffect, useState } from "react";
import Hero from "./landing_components/Hero";
import Footer from "./landing_components/footer";
import Course from "./landing_components/course";
import About from "./landing_components/about";
import Final from "./landing_components/final";
import CalendarEvents from "./landing_components/calander";
import Timeline from "./landing_components/timeline";
import Swiperimg from "./landing_components/swiper";
import FAQ from "./landing_components/faq";
import MarathonPromo from "./marathonpromo";
import Founders from "./landing_components/founders";

export default function Landing() {
  

  return (
    <div className="bg-white dark:bg-black text-black transition-colors duration-500 ease-in-out ">
      <div className="h-24 "></div>

      <div className="max-w-7xl mx-auto px-2 lg:px-0">

      <div className="flex">
        <div className="flex-1">
        <Hero />
        </div>
      </div>
      
      <div className="grid grid-cols-1 auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-stretch">
      <CalendarEvents />
      <Swiperimg />
      <div className="sm:col-span-2 lg:col-span-1">
        <MarathonPromo />
      </div>
      
      </div>

      </div>

      <About id="about" />
      
      <Founders/>
      <Course id="benefits" />
      <Timeline />
      
      <Footer />
      </div>
  );
}