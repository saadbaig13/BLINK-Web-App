import React from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminAcademicReport.scss';

function AdminAcademicReport() {
    return (
        <div className="AdminAcademicReport">
            <AdminNavigation />
            <div className="report-main-container">
                <div class="report-head">
                    <h3>08</h3>
                    <h2>Academic Report</h2>
                </div>
                <div class="report-headimg"></div>
            </div>
        </div>
    )
}

export default AdminAcademicReport
