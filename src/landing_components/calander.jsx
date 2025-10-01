import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = {
  "2025-09-05": [{ title: "Erode Runners Club - 5 KM Awareness Run at Erode Collector Office", assemble: "Start Time - 5:30 AM" }],
  "2025-09-07": [{ title: "Gobi Marathon - 2025", assemble: "" ,url:"https://gobimarathon.in/" }],
  "2025-09-14": [{ title: "Erode Runners Club - 10 KM Run at SPB Colony" , assemble: "Start Time - 5:30 AM" }],
  "2025-09-21": [{ title: "Erode Runners Club - 10 KM Run at Railway Institute (Poonduari Road)" , assemble: "Start Time - 5:30 AM" }],
  "2025-09-28": [{ title: "Erode Runners Club - 10 KM Run at Flyover" , assemble: "Start Time - 5:30 AM" }],
  "2025-10-05": [{ title: "Erode Runners Club - Strength Training at Railway Institute" , assemble: "Start Time - 6:00 AM" }],
  "2025-10-12": [{ title: "Erode Runners Club - 10 KM Run at VOC Ground (Sathy Road)" , assemble: "Start Time - 5:30 AM" }],
  "2025-10-26": [{ title: "Erode Runners Club - 10 KM Run at Pallipalayam" , assemble: "Start Time - 5:30 AM" }],
  "2025-11-02": [{ title: "Erode Runners Club - Strength Training at TUFF" , assemble: "Start Time - 6:00 AM" }],
  "2025-11-09": [{ title: "Erode Marathon - 2025", assemble: "" , url: "https://erodemarathon.com/" }],
};

function formatMonth(date) {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

export default function CalendarEvents() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
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

  const eventDates = Object.keys(events).map((d) => new Date(d).toDateString());
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().toDateString();

  return (
    <section className="h-full flex flex-col">
      {/* Section Heading */}
      <h2 className="text-xl md:text-xl font-bold dark:text-blue-300 text-[#374291] mb-2 text-center">
        Marathon Events Calendar
      </h2>

      <div className="flex-1 bg-white rounded-2xl border shadow-lg p-4 flex flex-col dark:bg-black dark:border-blue-600">
        {/* Blink style */}
        <style>
          {`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.4; }
            }
            .blink {
              animation: blink 1.5s infinite;
            }
          `}
        </style>

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4 dark:border-blue-600 dark:text-white">
          <button onClick={prevMonth}><ChevronLeft /></button>
          <h2 className="font-bold">{formatMonth(currentMonth)}</h2>
          <button onClick={nextMonth}><ChevronRight /></button>
        </div>

        {/* Content Wrapper - fixed height to prevent expansion */}
        <div className="flex flex-col min-h-0" style={{ height: '280px' }}>
          {!selectedDate ? (
            <>
              {/* Day names */}
              <div className="grid grid-cols-7 text-center font-semibold text-gray-600 dark:text-gray-300 mb-2">
                {dayNames.map((day, idx) => (
                  <div key={idx} className="text-sm">{day}</div>
                ))}
              </div>

              {/* Dates - takes remaining space */}
              <div className="grid grid-cols-7 gap-1 flex-1">
                {/* Empty slots before first day */}
                {Array.from({ length: firstDayIndex }).map((_, idx) => (
                  <div key={idx}></div>
                ))}

                {/* Actual days */}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const dateStr = new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth(),
                    day
                  ).toDateString();

                  const hasEvent = eventDates.includes(dateStr);

                  return (
                    <div
                      key={day}
                      onClick={() => hasEvent && setSelectedDate(dateStr)}
                      className={`flex items-center justify-center p-1 md:p-2 rounded cursor-pointer transition text-sm
                        ${hasEvent ? "bg-blue-300 hover:bg-blue-200 blink" : "bg-gray-50 dark:bg-gray-800 dark:text-white"}
                        ${dateStr === today ? "ring-2 ring-blue-600 font-bold" : ""}`}
                    >
                      <span>{day}</span>
                    </div>
                  );
                })}

                {/* Extra empty slots after month ends */}
                {Array.from({
                  length: 42 - (firstDayIndex + daysInMonth),
                }).map((_, idx) => (
                  <div key={`end-${idx}`}></div>
                ))}
              </div>
            </>
          ) : (
            /* Event list - fixed height container */
            <div className="flex flex-col h-full dark:text-white">
              <button
                onClick={() => setSelectedDate(null)}
                className="text-blue-600 mb-2 border border-blue-500 px-3 py-1 rounded-xl flex items-center w-fit"
              >
                <ChevronLeft className="mr-1" /> Back
              </button>
              <h3 className="font-bold mb-2">
                Events on {new Date(selectedDate).toLocaleDateString()}
              </h3>
              <div className="flex-1 overflow-y-auto">
                <ul className="space-y-2">
                  {events[
                    Object.keys(events).find(
                      (d) => new Date(d).toDateString() === selectedDate
                    )
                  ]?.map((event, idx) => (
                    <li
                      key={idx}
                      className="p-2 border rounded hover:bg-blue-50 dark:hover:bg-gray-900 transition"
                    >
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 dark:text-blue-300 font-semibold hover:underline" 
                      >
                        {event.title}
                      </a>
                      <br />
                      <a className="font-bold text-blue-700  dark:text-blue-300 ">{event.assemble}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}