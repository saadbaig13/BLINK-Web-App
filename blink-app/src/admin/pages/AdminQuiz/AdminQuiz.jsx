import React from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminQuiz.scss';

function AdminQuiz() {
    return (
        <div className="AdminQuiz">
            <AdminNavigation />
            <div className="quiz-main-container">
                <div class="quiz-head">
                    <h3>06</h3>
                    <h2>Quiz</h2>
                </div>
                <div class="quiz-headimg"></div>
            </div>
        </div>
    )
}

export default AdminQuiz
