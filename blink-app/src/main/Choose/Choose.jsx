import React from 'react';
import './Choose.scss';
import {Link} from 'react-router-dom';

function Choose() {
    return (
        <div className="Choose">
            <div class="card-container">
                <div class="student-card-wrapper">
                    <Link to="/Dashboard" style={{color: 'inherit', textDecoration: 'inherit'}}>
                        <div class="student-card">
                            <div class="student-image"></div>
                            <h2>I am a Student</h2>
                        </div>
                    </Link>
                </div>
                <div class="teacher-card-wrapper">
                    <Link to="/AdminDashboard" style={{color: 'inherit', textDecoration: 'inherit'}}>    
                        <div class="teacher-card">
                            <div class="teacher-image"></div>
                            <h2>I am a Teacher</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Choose
