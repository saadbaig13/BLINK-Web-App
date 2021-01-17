import React, {useState, useEffect} from 'react'
import Navigation from '../../components/Navigation/Navigation';
import './CourseRegistration.scss';
import Axios from 'axios';

function CourseRegistration() {
    const [courses, setCourses] = useState([{
        _id: '',
        courseName: '',
        courseCode: '',
        creditHours: ''
    }])

    useEffect(() => {
        fetch("http://localhost:5000/courses/added").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => setCourses(jsonRes));
    });

    return (
        <div className="CourseRegistration">
            <Navigation />
            <div className="course-main-container">
                <div class="course-head">
                    <h3>02</h3>
                    <h2>Course Registration</h2>
                </div>
                <div class="course-headimg"></div>
                <div className="courses">
                    <table className="courses-table">
                        <tr className="table-head">
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Credit Hours</th>
                            <th></th>
                        </tr>
                        {courses.map(courses => ( 
                            <tr className="table-content">
                                <td>{courses.courseName}</td>
                                <td>{courses.courseCode}</td>
                                <td>{courses.creditHours}</td>
                                <td><button className="register-course-button">
                                        Register
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CourseRegistration
