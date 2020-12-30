import React from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import AdminDCalendar from '../../adminComponents/adminDCalendar/AdminDCalendar';
import './AdminDashboard.scss';

function AdminDashboard() {
    return (
        <div className="AdminDashboard">
            <AdminNavigation />
            <div className="dashboard-main-container">
                <div class="dashboard-head">
                    <h3>01</h3>
                    <h2>Dashboard</h2>
                </div>
                <div class="dashboard-headimg"></div>
                <AdminDCalendar />
            </div>
        </div>
    )
}

export default AdminDashboard
