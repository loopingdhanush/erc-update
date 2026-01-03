import React from "react";
import member2 from "../assets/member1.jpg"; 
import member1 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import president from "../assets/president.jpg";
import presidentPhoto from "../assets/member1.jpg"; 
import {motion} from "framer-motion"

export default function FoundingMembers() {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto text-center">
        
        <div
          
        >

          <h1 className="text-lg md:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-600 pb-2 ">
          Pioneers
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-400 text-center pb-2" >Founding Members</h1>

        </div>

         <p
                  className="text-xl text-gray-800 dark:text-orange-100 text-center max-w-3xl mx-auto mt-8 mb-6 md:mb-12 futura-font"
                 
                >
                  The visionaries who transformed a simple idea into the thriving Erode Runners Club
                </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

          <div className="bg-white dark:bg-black rounded-2xl border-2 border-blue-200 shadow-blue-200 overflow-hidden ">

            <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/100 dark:from-black/100 to-transparent z-10"></div>
            <img
              src={member1}
              alt="Dr.G.MADHU SHANKAR"
              className="w-full aspect-video object-cover"
            />
            </div>

            <div className="p-4 z-11">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-blue-300">
                Dr.&nbsp;G.&nbsp;Madhu Shankar
              </h3>
              <p className="text-sm text-gray-600 dark:text-blue-100">Founding Member</p>
            </div>
          </div>

          <div className="bg-white dark:bg-black rounded-2xl border-2 border-blue-200 shadow-blue-200 overflow-hidden ">

            <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/100 dark:from-black/100 to-transparent z-10"></div>
            <img
              src={member2}
              alt="Dr.G.MADHU SHANKAR"
              className="w-full aspect-video object-cover"
            />
            </div>

            <div className="p-4 z-11">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-blue-300">
                Mr.&nbsp;V.&nbsp;Krishnamoorthy
              </h3>
              <p className="text-sm text-gray-600 dark:text-blue-100">Founding Member</p>
            </div>
          </div>

          <div className="bg-white dark:bg-black rounded-2xl border-2 border-blue-200 shadow-blue-200 overflow-hidden ">

            <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/100 dark:from-black/100 to-transparent z-10"></div>
            <img
              src={member3}
              alt="Dr.G.MADHU SHANKAR"
              className="w-full aspect-video object-cover"
            />
            </div>

            <div className="p-4 z-11">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-blue-300">
                Dr.&nbsp;A.&nbsp;Arunandhi Chelvan
              </h3>
              <p className="text-sm text-gray-600 dark:text-blue-100">Founding Member</p>
            </div>
          </div>

          </div>


<div className="max-w-3xl mx-auto bg-white dark:bg-black shadow-lg border-2 border-blue-200 rounded-2xl overflow-hidden mt-16">
        <div className="md:flex items-center">
       
          <div className="md:w-1/3 flex md:justify-center p-4 pd-1">
            <img
              src={president}
              alt="President"
              className="w-1/2 md:w-full object-cover rounded-xl shadow-md"
            />
          </div>
     
          <div className="p-6 pt-1 md:w-2/3 flex flex-col justify-center">
            <h2 className="text-left text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-600">
              President
            </h2>
            <h3 className="text-left mb-2 text-lg font-semibold text-gray-800 mt-2 dark:text-blue-300">
              Dr.&nbsp;A.&nbsp;Arunandhi Chelvan
            </h3>
            <p className="text-left text-gray-700 leading-relaxed dark:text-blue-100">
              More than a Surgical Oncologist, Dr.&nbsp;A.&nbsp;Arunandhi Chelvan is a runner
              at heart. A true pillar of the Erode Runners Club, he has inspired
              countless runners to lace up and chase their dreams. From several
              Full Marathons to grueling Ultra Marathons, his journey is a
              testament to endurance, discipline, and the joy of running.
            </p>
          </div>
        </div>
      </div>
</div>
    </section>
  );
}
