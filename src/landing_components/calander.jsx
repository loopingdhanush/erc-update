import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = {
  "2025-09-05": [{ title: "Erode Runners Club - 5 KM Awareness Run at Erode Collector Office", assemble: "Start Time - 5:30 AM" }],
  "2025-09-07": [{ title: "Gobi Marathon - 2025", assemble: "", url: "https://gobimarathon.in/" }],
  "2025-09-14": [{ title: "Erode Runners Club - 10 KM Run at SPB Colony", assemble: "Start Time - 5:30 AM" }],
  "2025-09-21": [{ title: "Erode Runners Club - 10 KM Run at Railway Institute (Poonduari Road)", assemble: "Start Time - 5:30 AM" }],
  "2025-09-28": [{ title: "Erode Runners Club - 10 KM Run at Flyover", assemble: "Start Time - 5:30 AM" }],
  "2025-10-05": [{ title: "Erode Runners Club - Strength Training at Railway Institute", assemble: "Start Time - 6:00 AM" }],
  "2025-10-12": [{ title: "Erode Runners Club - 10 KM Run at VOC Ground (Sathy Road)", assemble: "Start Time - 5:30 AM" }],
  "2025-10-26": [{ title: "Erode Runners Club - 10 KM Run at Pallipalayam", assemble: "Start Time - 5:30 AM" }],
  "2025-11-02": [{ title: "Erode Runners Club - Strength Training at TUFF", assemble: "Start Time - 6:00 AM" }],
  "2025-11-09": [{ title: "Erode Marathon - 2025", assemble: "", url: "https://erodemarathon.com/" }],
};

function formatMonth(date) {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

export default function CalendarEvents() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
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
      {/* Card container (same pattern as other cards) */}
      <div className="flex-1 rounded-2xl shadow-2xl border-2 bg-white dark:bg-gray-900 dark:border-[#007CC2] flex flex-col overflow-hidden">
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

        {/* Header: title only, like other cards */}
        <div className="flex items-center justify-center border-b px-4 py-2 dark:border-[#007CC2]">
          <h2 className="text-lg md:text-xl font-bold text-[#374291] dark:text-blue-300">
            Marathon Events Calendar
          </h2>
        </div>

        {/* Body: month nav + calendar / events */}
        <div className="flex flex-col flex-1 px-4 py-3">
          {/* Month navigation row */}
          <div className="flex items-center justify-between mb-3 dark:text-white">
            <button
              onClick={prevMonth}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <h3 className="font-semibold text-xs md:text-sm text-gray-700 dark:text-gray-200">
              {formatMonth(currentMonth)}
            </h3>

            <button
              onClick={nextMonth}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Content: calendar or event list */}
          <div className="flex flex-col flex-1 min-h-0">
            {!selectedDate ? (
              <>
                {/* Day names */}
                <div className="grid grid-cols-7 text-center font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  {dayNames.map((day, idx) => (
                    <div key={idx} className="text-xs md:text-sm">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Dates grid */}
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
                    const isToday = dateStr === today;

                    return (
                      <div
                        key={day}
                        onClick={() => hasEvent && setSelectedDate(dateStr)}
                        className={`flex items-center justify-center p-1 md:p-2 rounded cursor-pointer transition text-xs md:text-sm
                          ${
                            hasEvent
                              ? "bg-blue-300 hover:bg-blue-200 blink text-gray-900"
                              : "bg-gray-50 dark:bg-gray-800 dark:text-white"
                          }
                          ${isToday ? "ring-2 ring-blue-300 font-bold" : ""}`}
                      >
                        <span>{day}</span>
                      </div>
                    );
                  })}

                  {/* Extra empty slots after month ends (to keep 6 rows = 42 cells) */}
                  {Array.from({
                    length: 42 - (firstDayIndex + daysInMonth),
                  }).map((_, idx) => (
                    <div key={`end-${idx}`}></div>
                  ))}
                </div>
              </>
            ) : (
              // Event list
              <div className="flex flex-col flex-1 min-h-0 dark:text-white">
                <button
                  onClick={() => setSelectedDate(null)}
                  className="text-blue-600 mb-2 border border-[#007CC2] px-3 py-1 rounded-xl flex items-center w-fit text-sm"
                >
                  <ChevronLeft className="mr-1 text-[#007CC2] w-4 h-4" />
                  <span className="text-[#007CC2]">Back</span>
                </button>

                <h3 className="font-bold mb-2 text-sm md:text-base">
                  Events on{" "}
                  {new Date(selectedDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    weekday: "short",
                  })}
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
                        {event.url ? (
                          <a
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 dark:text-blue-300 font-semibold hover:underline text-sm"
                          >
                            {event.title}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                            {event.title}
                          </p>
                        )}
                        {event.assemble && (
                          <p className="font-bold text-blue-700 dark:text-blue-300 text-xs mt-1">
                            {event.assemble}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
