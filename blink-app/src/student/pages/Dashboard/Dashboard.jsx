import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import DCalendar from '../../components/DCalendar/DCalendar';
import './Dashboard.scss';

function Dashboard() {
    return (
        <div className="Dashboard">
            <Navigation />
            <div className="dashboard-main-container">
                <div class="dashboard-head">
                    <h3>01</h3>
                    <h2>Dashboard</h2>
                </div>
                <div class="dashboard-headimg"></div>
                <DCalendar />
            </div>
        </div>
    )
}

export default Dashboard
