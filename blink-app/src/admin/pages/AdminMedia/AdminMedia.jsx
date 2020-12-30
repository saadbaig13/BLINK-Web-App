import React from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminMedia.scss';

function AdminMedia() {
    return (
        <div className="AdminMedia">
            <AdminNavigation />
            <div className="media-main-container">
                <div class="media-head">
                    <h3>04</h3>
                    <h2>Media</h2>
                </div>
                <div class="media-headimg"></div>
            </div>
        </div>
    )
}

export default AdminMedia
