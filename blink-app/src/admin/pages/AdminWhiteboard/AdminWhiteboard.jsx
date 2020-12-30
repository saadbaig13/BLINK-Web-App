import React from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminWhiteboard.scss';

function AdminWhiteboard() {
    return (
        <div className="AdminWhiteboard">
            <AdminNavigation />
            <div className="whiteboard-main-container">
                <div class="whiteboard-head">
                    <h3>07</h3>
                    <h2>Digital Whiteboard</h2>
                </div>
                <div class="whiteboard-headimg"></div>
            </div>
        </div>
    )
}

export default AdminWhiteboard
