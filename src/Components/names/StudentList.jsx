import React, { useState } from 'react';
import CalendarData from '../Calender/CalenderData';
import StudentNames from './SecondYearBoys';
import FirstYearGirls from './FristYearGirls'; 
import FristYearBoys from './FristYearBoys';

const App = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <CalendarData onDateChange={setSelectedDate} />
            <StudentNames selectedDate={selectedDate} />
            <FirstYearGirls selectedDate={selectedDate} /> 
            <FristYearBoys selectedDate={selectedDate} />
        </div>
    );
};

export default App;
