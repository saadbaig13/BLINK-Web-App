import React from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminAssignments.scss';

function AdminAssignments() {
    return (
        <div className="AdminAssignments">
            <AdminNavigation />
            <div className="assignments-main-container">
                <div class="assignments-head">
                    <h3>05</h3>
                    <h2>Assignments</h2>
                </div>
                <div class="assignments-headimg"></div>
            </div>
        </div>
    )
}

export default AdminAssignments
