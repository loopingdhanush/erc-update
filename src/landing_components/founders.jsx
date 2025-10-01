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
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h1 className="text-lg md:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-600 pb-2 ">
          Pioneers
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-400 text-center pb-2" >Founding Members</h1>

        </motion.div>

         <motion.p
                  className="text-xl text-gray-800 dark:text-orange-100 text-center max-w-3xl mx-auto mt-8 mb-6 md:mb-12 futura-font"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  The visionaries who transformed a simple idea into the thriving Erode Runners Club
                </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
  
          <div className="bg-white dark:bg-black  rounded-2xl border border-blue-200 shadow-lg shadow-blue-200 overflow-hidden ">
            <img
              src={member1}
              alt="Dr.G.MADHU SHANKAR"
              className="w-full aspect-video object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-blue-300">
                Dr.&nbsp;G.&nbsp;Madhu Shankar
              </h3>
              <p className="text-sm text-gray-600 dark:text-blue-100">Founding Member</p>
            </div>
          </div>

      
          <div className="bg-white dark:bg-black rounded-2xl border border-blue-200 shadow-lg shadow-blue-200 overflow-hidden">
            <img
              src={member2}
              alt="Mr.V.Krishnamoorthy"
              className="w-full aspect-video object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-blue-300 ">
                Mr.&nbsp;V.&nbsp;Krishnamoorthy
              </h3>
              <p className="text-sm text-gray-600 dark:text-blue-100">Founding Member</p>
            </div>
          </div>
         
          <div className="bg-white dark:bg-black rounded-2xl border border-blue-200 shadow-lg shadow-blue-200 overflow-hidden">
            <img
              src={member3}
              alt="Placeholder"
              className="w-full aspect-video object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-blue-300">
                Dr.&nbsp;A.&nbsp;Arunandhi Chelvan
              </h3>
              <p className="text-sm text-gray-600 dark:text-blue-100">Founding Member</p>
            </div>
          </div>
        </div>

        
<div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-lg border border-blue-200 shadow-blue-200 rounded-2xl overflow-hidden mt-16">
        <div className="md:flex items-center">
       
          <div className="md:w-1/3 flex justify-center p-4">
            <img
              src={president}
              alt="President"
              className="w-40 h-56 object-cover rounded-xl shadow-md"
            />
          </div>
     
          <div className="p-6 md:w-2/3">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-600">
              President
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mt-2 dark:text-blue-300">
              Dr.&nbsp;A.&nbsp;Arunandhi Chelvan
            </h3>
            <p className="text-sm text-gray-600 mb-4 dark:text-blue-100">
              The Heartbeat of Erode Runners Club
            </p>
            <p className="text-gray-700 leading-relaxed dark:text-blue-100">
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
