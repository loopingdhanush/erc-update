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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6" style={{ minHeight: '70vh' }}>
          {/* Left Hero (takes 2 columns) */}
          <div className="md:col-span-2 flex">
            <div className="flex-1">
              <Hero />
            </div>
          </div>

          {/* Right side stacked - both components will share equal height */}
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <MarathonPromo />
            </div>
            <div className="flex-1">
              <CalendarEvents />
            </div>
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