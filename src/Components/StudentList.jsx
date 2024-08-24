import React, { useState } from 'react';
import CalendarData from './Calender/CalenderData';
import StudentNames from './names/SecondYearStudentNames';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <CalendarData onDateChange={setSelectedDate} />
      <StudentNames selectedDate={selectedDate} />
    </div>
  );
};

export default App;
