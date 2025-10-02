import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2022",
    title: "1st Edition Erode Marathon (The Big Debut)",
    description:
      "The inaugural edition of the Erode Marathon took place in 2022, marking the club’s entry into large-scale events.",
  },
  {
    year: "2023",
    title: "2nd Edition Erode Marathon",
    description:
      "A bigger, more organized edition with increased participation and visibility.",
  },
  {
    year: "2024",
    title: "3rd Edition Erode Marathon",
    description:
      "It became Erode’s flagship running event, drawing runners from across Tamil Nadu.",
  },
  {
    year: "2025",
    title: "4th Edition Erode Marathon - 9th Nov 2025",
    description:
      "",
  },
];

export default function Timeline() {
  return (
    <section className="relative pt-20">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-lg md:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-600 pb-2">
          History
        </h1>
        <h2 className="kollektif-font text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-400 text-center">
          Timeline
        </h2>

        <p className="mt-3 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto text-center dark:text-blue-100">
          A journey from a small running group to hosting one of Tamil Nadu’s most anticipated marathons.
        </p>


        <div className="relative mt-16">
      
          <div className="absolute left-[32px] top-6 bottom-0 w-1 bg-gradient-to-b from-[#007CC2] to-white "></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
             
                <div className="flex items-center justify-center absolute left-0 top-6 w-16 h-8 bg-[#007CC2] text-white text-sm font-semibold rounded-md shadow">
                  {item.year}
                </div>

          
                <div className="ml-24 bg-blue-50 dark:bg-gray-900 border border-[#007CC2] dark:border-blue-600 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-[#007CC2] kollektif-font mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-900 dark:text-orange-100 futura-font leading-relaxed">
                    {item.description}
                  </p>

                  {item.year === "2025" && (
                    <div className="">
                      <p className="text-gray-700 dark:text-gray-300">
                        Visit{" "}
                        <a
                          href="https://erodemarathon.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#007CC2] font-semibold underline"
                        >
                          erodemarathon.com
                        </a>{" "}
                        for registration.
                      </p>
                      <a
                        href="https://erodemarathon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 px-6 py-2 bg-[#007CC2] text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                      >
                        Click here to register
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="h-20"></div>
        </div>
      </div>
    </section>
  );
}
