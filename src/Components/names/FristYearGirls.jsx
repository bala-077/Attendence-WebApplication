import React, { useState } from "react";
import CalendarData from "../Calender/CalenderData";

const FirstYearGirls = () => {
  const [input, setInput] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [studentNames, setStudentNames] = useState([
    { id: 2001, name: "Student A", attendance: {} },
    { id: 2002, name: "Student B", attendance: {} },
  ]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    const newId =
      studentNames.length > 0
        ? Math.max(...studentNames.map((s) => s.id)) + 1
        : 2001;
    setStudentNames([
      ...studentNames,
      { id: newId, name: input, attendance: {} },
    ]);
    setInput("");
  };

  const getDaysInMonth = (date) => {
    if (!(date instanceof Date)) {
      return []; // Return an empty array if date is not valid
    }
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(new Date(year, month, i));
    }
    return dates;
  };

  const daysInMonth = getDaysInMonth(selectedDate);
  const today = new Date().toDateString(); // Get the current date

  const toggleAttendance = (studentId, day) => {
    setStudentNames(
      studentNames.map((student) => {
        if (student.id === studentId) {
          return {
            ...student,
            attendance: {
              ...student.attendance,
              [day]: !student.attendance[day],
            },
          };
        }
        return student;
      })
    );
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <CalendarData selectedDate={selectedDate} onDateChange={onDateChange} />
      <div className="p-2 md:p-8 bg-blue-500">
        <div className="w-full flex gap-5 mb-5">
          <input
            type="text"
            className="flex-grow rounded-lg border border-black outline-none px-2"
            placeholder="Add A Student Name"
            value={input}
            onChange={handleInput}
          />
          <button
            className="bg-black px-3 py-1 rounded-md text-white"
            onClick={handleClick}
          >
            ADD
          </button>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2">REG.NO</th>
                <th className="px-4 py-2">STUDENT NAME</th>
                {daysInMonth.map((day) => (
                  <th key={day} className="px-2 py-2 text-center">
                    {day.getDate()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentNames.map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="px-4 py-2">P23CA{student.id}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  {daysInMonth.map((day) => (
                    <td key={day} className="px-2 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={
                          student.attendance[day.toDateString()] || false
                        }
                        onChange={() =>
                          toggleAttendance(student.id, day.toDateString())
                        }
                        disabled={day.toDateString() !== today}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FirstYearGirls;
