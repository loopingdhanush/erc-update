import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = {
  "2026-01-01": [{ title: "New Year Group Run" }],
  "2026-01-04": [
    { title: "Chennai Marathon", url: "https://www.thechennaimarathon.com/index.html" },
    { title: "Mutthu Marathon", url: "https://mutthumarathon.org/" },
  ],
  "2026-01-11": [
    { title: "ERC Monthly Group Run" },
    { title: "Palakkad Marathon", url: "https://www.palakkadmarathon.com/" },
  ],
  "2026-01-14": [{ title: "Pongal Get Together & ERC Awards Function" }],
  "2026-01-18": [
    { title: "Mumbai Marathon", url: "https://tatamumbaimarathon.procam.in/" },
    { title: "Kalingarayan Marathon" }
  ],
  "2026-01-31": [{ title: "Coimbatore Backyard Ultra", url:"https://battlegroundindia.odoo.com/coimbatorebackyardultra" }],

  "2026-02-01": [{ title: "Kauvery Marathon Chennai", url:"https://k10k.run/" }],
  "2026-02-07": [{ title: "Chennai Trackathon 6Hrs & 12Hrs" },
    { title: "Auroville Marathon", url:"https://www.aurovillemarathon.com/" },
    { title: "kochi marathon", url:"https://www.kochimarathon.in/" }
  ],
  "2026-02-08": [{ title: "ERC Monthly Group Run" }],
  "2026-02-14": [{ title: "Valentines Day Run" }],
  "2026-02-22": [
    { title: "Coimbatore Womens Marathon", url: "https://coimbatorewomensmarathon.com/" },
    { title: "Annur Marathon", url: "https://annurmarathon.com/" },
  ],


  "2026-03-08": [{ title: "ERC Monthly Group Run" }],
  "2026-03-22": [{ title: "Ooty Ultra", url: "https://ootyultra.com/" }],
};

function formatMonth(date) {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

export default function CalendarEvents() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [closing, setClosing] = useState(false);

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setSelectedDate(null);
      setClosing(false);
    }, 200);
  };

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayIndex = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const eventDates = Object.keys(events).map((d) =>
    new Date(d).toDateString()
  );

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().toDateString();

  return (
    <section className="h-full flex flex-col">

      <div className="flex-1 rounded-2xl shadow-2xl border-2 bg-white dark:bg-gray-900 dark:border-[#007CC2] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-center border-b px-4 py-2 dark:border-[#007CC2]">
          <h2 className="text-lg md:text-xl font-bold text-[#374291] dark:text-blue-300">
            Marathon Events Calendar
          </h2>
        </div>

        <div className="flex flex-col flex-1 px-4 py-3">
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-3 dark:text-white">
            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
                )
              }
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <h3 className="font-semibold text-xs md:text-sm text-gray-700 dark:text-gray-200">
              {formatMonth(currentMonth)}
            </h3>

            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
                )
              }
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

         
          <div className="grid grid-cols-7 text-center font-semibold text-gray-600 dark:text-gray-300 mb-2">
            {dayNames.map((day, idx) => (
              <div key={idx} className="text-xs md:text-sm">
                {day}
              </div>
            ))}
          </div>

        
          <div className="grid grid-cols-7 gap-1 flex-1">
            {Array.from({ length: firstDayIndex }).map((_, idx) => (
              <div key={idx}></div>
            ))}

            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const dateStr = new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth(),
                day
              ).toDateString();

              const hasEvent = eventDates.includes(dateStr);
              const isToday = dateStr === today;

              return (
                <div
                  key={day}
                  onClick={() => hasEvent && setSelectedDate(dateStr)}
                  className={`flex items-center justify-center p-1 md:p-2 rounded cursor-pointer transition text-xs md:text-sm
                    ${
                      hasEvent
                        ? "bg-blue-300 hover:bg-blue-200 text-gray-900"
                        : "bg-gray-50 dark:bg-gray-800 dark:text-white"
                    }
                    ${isToday ? "ring-2 ring-blue-300 font-bold" : ""}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedDate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          <div
            onClick={closeModal}
            className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
              closing ? "opacity-0" : "opacity-100"
            }`}
          />

          <div
            className={`relative w-[90%] max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border dark:border-[#007CC2] p-4
              ${closing ? "animate-fadeOut" : "animate-fadeIn"}`}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
            >
              ✕
            </button>

            <h3 className="font-bold mb-3 text-sm md:text-base  dark:text-blue-300">
              Events on{" "}
              {new Date(selectedDate).toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </h3>

            <div className="max-h-60 overflow-y-auto space-y-2">
              {events[
                Object.keys(events).find(
                  (d) => new Date(d).toDateString() === selectedDate
                )
              ]?.map((event, idx) => (
                <div
                  key={idx}
                  className="p-2 border rounded-xl hover:bg-blue-50  dark:text-white dark:hover:bg-gray-800 transition"
                >
                  {event.url ? (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 dark:text-blue-300 font-semibold text-sm hover:underline"
                    >
                      {event.title}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold">{event.title}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
