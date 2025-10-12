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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);
    const videos = Array.from(document.querySelectorAll("video"));

    const totalAssets = images.length + videos.length;
    let loadedAssets = 0;

    if (totalAssets === 0) {
      setIsLoaded(true);
      return;
    }

    const checkAllLoaded = () => {
      loadedAssets += 1;
      if (loadedAssets === totalAssets) {
        setIsLoaded(true);
      }
    };

    // Listen for images
    images.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener("load", checkAllLoaded);
        img.addEventListener("error", checkAllLoaded);
      }
    });

    // Listen for videos
    videos.forEach((video) => {
      if (video.readyState >= 3) {
        // HAVE_FUTURE_DATA means enough is loaded
        checkAllLoaded();
      } else {
        video.addEventListener("loadeddata", checkAllLoaded);
        video.addEventListener("error", checkAllLoaded);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", checkAllLoaded);
        img.removeEventListener("error", checkAllLoaded);
      });
      videos.forEach((video) => {
        video.removeEventListener("loadeddata", checkAllLoaded);
        video.removeEventListener("error", checkAllLoaded);
      });
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white ">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black text-black transition-colors duration-500 ease-in-out">
      <div className="h-24 "></div>
      <div className="max-w-7xl mx-auto px-2">

      <div className="flex">
        <div className="flex-1">
        <Hero />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 ">                  
        <CalendarEvents />                   
        <MarathonPromo />
        
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