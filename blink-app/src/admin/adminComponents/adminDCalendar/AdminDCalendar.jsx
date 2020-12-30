import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-nice-dates/build/style.css';
import './AdminDCalendar.scss';

function AdminDCalendar() {
    const [value, onChange] = useState(new Date())

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}

export default AdminDCalendar
