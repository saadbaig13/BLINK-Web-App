import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-nice-dates/build/style.css';
import './DCalendar.scss';

function DCalendar() {
    const [value, onChange] = useState(new Date())

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}

export default DCalendar
