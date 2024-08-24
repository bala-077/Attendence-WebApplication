import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useLocation } from "react-router-dom";

const CalendarData = ({ onDateChange }) => {
  // Use useLocation to access the passed state
  const location = useLocation();
  const title = location.state?.title || "default title"; // Fallback to default if title is undefined

  const [date, setDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDate(now);
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate); // Notify parent component about the date change
    setIsCalendarOpen(false); // Close the calendar after selecting a date
  };

  return (
    <div className="relative w-full max-w-full">
      <div
        onClick={toggleCalendar}
        className="cursor-pointer border p-4 bg-white text-gray-800 flex flex-col md:flex-row items-center justify-between shadow-lg transition-all duration-300"
      >
        <h1 className="text-lg font-semibold md:mb-0 md:text-xl">{title}</h1> {/* Display the title */}
        <div className="flex flex-col items-center md:items-start text-sm sm:text-base mt-2 md:mt-0">
          <span className="font-bold text-gray-900">{date.toDateString()}</span>
          <span className="text-gray-600">{currentTime}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transition-transform ${isCalendarOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isCalendarOpen && (
        <div className="absolute top-full right-0 mt-1 w-full max-w-xs md:max-w-md lg:max-w-lg z-10 border border-gray-300 rounded-lg shadow-lg bg-white">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileClassName={({ date, view }) =>
              view === "month" && date.toDateString() === new Date().toDateString() ? "bg-blue-500 text-white rounded-full" : ""
            }
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default CalendarData;
