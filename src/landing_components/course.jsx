import React from "react";
import { motion } from "framer-motion";

const courseinfo = [
  {
    title: "Friendly Runners Group",
    description: "We have an active WhatsApp group. Members share their daily runs, tips, and motivate each other. There’s always some encouragement waiting for you.",
    icon: "https://img.icons8.com/pulsar-line/100/1E88E5/people-working-together.png",
  },
  {
    title: "Simple Training Plans",
    description: "From your first 5K to a half marathon, we have easy plans. Just follow step by step, no confusions.",
    icon: "https://img.icons8.com/pulsar-line/100/1E88E5/barbell.png",
  },
  {
    title: "No Tension on Race Day",
    description: "Forget long queues. Our club takes care of bib collection. You just come, warm up, and run happily.",
    icon: "https://img.icons8.com/pulsar-line/100/1E88E5/suv.png",
  },
  {
    title: "Help from Experienced Runners",
    description: "New runners get full support. Members share their experience, give guidance, and run along with you.",
    icon: "https://img.icons8.com/pulsar-line/100/1E88E5/exercise.png",
  },
  {
    title: "Daily Runs & Special Events",
    description: "We have group runs every day. It keeps the energy alive.",
    icon: "https://img.icons8.com/pulsar-line/100/1E88E5/star.png",
  },
  {
    title: "Club T-Shirt",
    description: "All members get a T-shirt with their name and the club logo. Wear it proudly on every run.",
    icon: "https://img.icons8.com/pulsar-line/100/1E88E5/t-shirt.png",
  },
];


export default function Course({id}) {
  return (
    <section id={id} className="relative ">
      <div className="mx-4 md:pt-20 pt-10 text-auto">
        
        <motion.div
          
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-lg md:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-600 pb-2">
          Benefits
        </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-400 text-center" >Why Join Erode Runners?</h1>
        </motion.div>

        <motion.p
          className="text-xl text-gray-800 dark:text-blue-100 text-center max-w-3xl mx-auto mt-8 mb-6 md:mb-12 pl-2 pr-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Being part of our club isn’t just about running, it’s about running smarter, together.
        </motion.p>

        <div className="max-w-6xl mx-auto px-6 md:py-12 py-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {courseinfo.map((course, index) => (
            <motion.div
              key={index}
              className="md:p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 md:mx-auto flex items-center justify-center 
                              mb-6 mt-2 bg-blue-200 dark:bg-gray-800 rounded-full">
                <img src={course.icon} alt="Icon" className="w-8 h-8" />
              </div>

              <h3 className="text-2xl text-[#007CC2] font-bold md:text-center mb-4 ">
                {course.title}
              </h3>

              <p className="text-gray-900 dark:text-blue-100 md:text-center  leading-relaxed">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
