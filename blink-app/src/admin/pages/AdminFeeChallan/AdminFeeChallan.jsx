import React from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminFeeChallan.scss';

function AdminFeeChallan() {
    return (
        <div className="AdminFeeChallan">
            <AdminNavigation />
            <div className="fee-main-container">
                <div class="fee-head">
                    <h3>09</h3>
                    <h2>Fee Challan</h2>
                </div>
                <div class="fee-headimg"></div>
            </div>
        </div>
    )
}

export default AdminFeeChallan
