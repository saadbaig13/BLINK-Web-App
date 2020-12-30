import React from 'react';
import './Navigation.scss';
import {Link} from 'react-router-dom';

function Navigation() {
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
                            <Link to="/Dashboard" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-laptop fa-2x"></i>
                                <span class="nav-text">Dashboard</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/CourseRegistration" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-list-alt fa-2x"></i>
                                <span class="nav-text">Course Registration</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/Attendance" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-users fa-2x"></i>
                                <span class="nav-text">Attendance</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/Media" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-picture-o fa-2x"></i>
                                <span class="nav-text">Media</span>
                            </Link>
                        </a>
                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <Link to="/Assignments" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-tasks fa-2x"></i>
                                <span class="nav-text">Assignments</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/Quiz" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-file-text-o fa-2x"></i>
                                <span class="nav-text">Quiz</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/Whiteboard" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-pencil fa-2x"></i>
                                <span class="nav-text">Digital Whiteboard</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/AcademicReport" to="/AcademicReport" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-bar-chart-o fa-2x"></i>
                                <span class="nav-text">Academic Report</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Link to="/FeeChallan" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <i class="fa fa-dollar fa-2x"></i>
                                <span class="nav-text">Fee Challan</span>
                            </Link>
                        </a>
                    </li>
                </ul>

                <ul class="logout">
                    <li>
                        <a href="#">
                            <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
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

export default Navigation
