import React from "react";
import erdm from "./assets/erdm.png";

export default function MarathonPromo() {
  return (
    <section className="h-full w-full flex flex-col">
      <div className="flex-1 rounded-2xl shadow-2xl overflow-hidden border-2 dark:border-[#007CC2] bg-white dark:bg-gray-900 flex flex-col">

        

        {/* Header (same style as calendar header) */}
        <div className="flex items-center justify-center border-b py-2 dark:border-[#007CC2]">
          <h2 className="text-lg md:text-xl font-bold text-[#374291] dark:text-blue-300">
            Featured Event
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-row-reverse md:flex-col flex-1 ">

          {/* Text */}
          <div className="p-6 flex flex-col justify-center ">
            <img
                src={erdm}
                className="h-12 w-24 mb-2"
                alt="Logo"
            />
            <h2 className="text-left text-2xl font-bold text-transparent bg-clip-text bg-black dark:text-blue-300">
              Erode Marathon 2025
            </h2>
            <h3 className="text-left text-lg font-semibold text-gray-800 dark:text-blue-300">
              16th November 2025
            </h3>
            <h3 className="text-left mb-2 text-xs font-semibold text-gray-800 dark:text-blue-300">
              5km · 10km · 21km · 42km
            </h3>

            <p className="text-left text-gray-700 dark:text-blue-100 text-xs leading-relaxed pb-4">
              Powered by Erode Runners, this annual marathon is one of Tamil Nadu's
              largest running events uniting fitness lovers and promoting a strong,
              healthy community spirit since 2022.
            </p>

            <button
              className="w-fit dark:bg-black dark:text-blue-200 lg:block text-sm font-semibold border-2 hover:bg-gray-100 border-black shadow-md hover:shadow-lg transition duration-300 ease-in-out rounded-xl px-4 py-1 h-8"
            >
              Click to Register 
            </button>

          </div>

          

        </div>
      </div>
    </section>
  );
}
