import React, { useState } from 'react';
import CalendarData from '../Calender/CalenderData';
import StudentNames from './SecondYearStudentNames';
import FirstYearGirls from './FristYearGirls'; 

const App = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <CalendarData onDateChange={setSelectedDate} />
            <StudentNames selectedDate={selectedDate} />
            <FirstYearGirls selectedDate={selectedDate} /> {/* Correct spelling */}
        </div>
    );
};

export default App;
