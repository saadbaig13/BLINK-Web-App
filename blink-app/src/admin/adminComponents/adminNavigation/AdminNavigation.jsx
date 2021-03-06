import React, {useContext} from 'react';
import './AdminNavigation.scss';
import {Link} from 'react-router-dom';
import TeacherUserContext from '../../../context/TeacherUserContext';

function AdminNavigation() {
    const {setTeacherUserData} = useContext(TeacherUserContext);

    const logout = () => {
        setTeacherUserData({
            token: undefined,
            student: undefined
        });
        localStorage.setItem("auth-token", "");
    };

    return (
        <div className="Navigation">
            <div class="area"></div>
            <nav class="main-menu">
                <ul>
                    <li>
                        <div className="blink-logo-white"></div>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/AdminDashboard" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-laptop fa-2x"></i>
                                <span class="nav-text">Dashboard</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/AdminCourseRegistration" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-list-alt fa-2x"></i>
                                <span class="nav-text">Courses</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/AdminAttendance" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-users fa-2x"></i>
                                <span class="nav-text">Attendance</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/AdminMedia" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-picture-o fa-2x"></i>
                                <span class="nav-text">Media</span>
                            </Link>
                        </a>
                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <Link to="/AdminAssignments" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-tasks fa-2x"></i>
                                <span class="nav-text">Assignments</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/AdminQuiz" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-file-text-o fa-2x"></i>
                                <span class="nav-text">Quiz</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/AdminWhiteboard" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-pencil fa-2x"></i>
                                <span class="nav-text">Digital Whiteboard</span>
                            </Link>
                        </a>
                    </li>
                </ul>

                <ul class="logout">
                    <li>
                        <a href="#" onClick={logout}>
                            <Link to="/TeacherLogin" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-power-off fa-2x"></i>
                                <span class="nav-text">Logout</span>
                            </Link>
                        </a>
                    </li>  
                </ul>
            </nav>
        </div>
    )
}

export default AdminNavigation
