import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import marathonPoster from "./assets/em-25.jpg";

export default function SwiperImg() {
  return (
 <div className="h-full w-full md:max-h-[400px] flex flex-col justify-center dark:border-[#007CC2] ">

  <h2 className="text-xl md:text-xl font-bold dark:text-blue-300 text-[#374291] mb-2 ml-4">Featured Events </h2>

    <div className="h-full rounded-2xl shadow-2xl relative overflow-hidden md:mx-0 border-2 dark:border-[#007CC2]">

    <div className="flex h-full flex-col md:flex-row flex justify-center items-center">
      <img
          src={marathonPoster}
          alt="Erode Marathon 2025"
          className="max-w-[250px] m-4 rounded-xl "
          loading="eager"
          decoding="async"
        />
    

    <div className="p-4 flex flex-col  rounded-tr-3xl text-black dark:text-white  justify-center items-center text-center"> 
        <h3 className="text-md md:text-xl font-bold">Erode Marathon 2025</h3>
        <p className="text-sm font-bold ">November 16, 2025</p>
        <p className="mt-2 text-sm md:text-md text-center">Powered by Erode Runners, has been held annually since 2022 and is one of Tamil Nadu’s largest running event. Bringing together fitness enthusiasts from all walks of life, it continues to promote health, unity, and community spirit across the state.</p>
        <a
          href="https://erodemarathon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-300 text-black px-4 py-2 mt-2 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition ">
          Register Now
        </a>
    </div>

    </div>

    </div>

    </div>
  );
}
