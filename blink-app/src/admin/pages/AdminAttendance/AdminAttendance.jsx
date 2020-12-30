import React from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminAttendance.scss';

function AdminAttendance() {
    return (
        <div className="AdminAttendance">
            <AdminNavigation />
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

export default AdminAttendance
