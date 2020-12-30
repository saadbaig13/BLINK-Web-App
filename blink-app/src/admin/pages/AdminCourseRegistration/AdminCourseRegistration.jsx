import React from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminCourseRegistration.scss';

function AdminCourseRegistration() {
    return (
        <div className="AdminCourseRegistration">
            <AdminNavigation />
            <div className="course-main-container">
                <div class="course-head">
                    <h3>02</h3>
                    <h2>Course Registration</h2>
                </div>
                <div class="course-headimg"></div>
            </div>
        </div>
    )
}

export default AdminCourseRegistration
