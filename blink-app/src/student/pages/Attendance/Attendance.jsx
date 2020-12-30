import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import './Attendance.scss';

function Attendance() {
    return (
        <div className="Attendance">
            <Navigation />
            <div className="attendance-main-container">
                <div class="attendance-head">
                    <h3>03</h3>
                    <h2>Attendance</h2>
                </div>
                <div class="attendance-headimg"></div>
            </div>
        </div>
    )
}

export default Attendance
