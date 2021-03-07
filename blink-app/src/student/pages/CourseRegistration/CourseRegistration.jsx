import React, {useState, useEffect} from 'react'
import Navigation from '../../components/Navigation/Navigation';
import './CourseRegistration.scss';
import Axios from 'axios';
import ErrorMessage from '../../../main/ErrorMessage/ErrorMessage';

function CourseRegistration() {
    const [error, setError] = useState("");

    const [courses, setCourses] = useState([{
        _id: '',
        courseName: '',
        courseCode: '',
        creditHours: ''
    }]);

    const [registeredCourses, setRegisteredCourses] = useState([{
        _id: '',
        courseName: '',
        courseCode: '',
        creditHours: ''
    }]);

    useEffect(() => {
        const fetchAllCourses = async () => {
            fetch("http://localhost:5000/courses/added").then(res => {
                if(res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setCourses(jsonRes));
        };

        const fetchRegisteredCourses = async () => {
            let token = localStorage.getItem("auth-token");

            fetch("http://localhost:5000/studentCourses/registered",
                {headers: {"x-auth-token": token}}
                ).then(res => {
                if(res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setRegisteredCourses(jsonRes));
        };

        fetchAllCourses();
        fetchRegisteredCourses();
    }, []);

    const onCourseRegister = async (id, courseName, courseCode, creditHours) => {
        try {
            let token = localStorage.getItem("auth-token");
            await Axios.post(`http://localhost:5000/studentCourses/${id}/${courseName}/${courseCode}/${creditHours}`,
            null,
            {headers: {"x-auth-token": token}}).then((res) => {
                alert("Course Registered!");
            });
        }
        catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    const onCourseDrop = (id) => {
        let token = localStorage.getItem("auth-token");
        Axios.delete(`http://localhost:5000/studentCourses/${id}`,
        {headers: {"x-auth-token": token}}).then((res) => {
            alert("Course Dropped");
        });
    };

    return (
        <div className="CourseRegistration">
            <Navigation />
            <div className="course-main-container">
                <div class="course-head">
                    <h3>02</h3>
                    <h2>Course Registration</h2>
                </div>
                <div class="course-headimg"></div>

                {error && <ErrorMessage message={error} clearError={() => setError(undefined)} />}

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
                                <td><button
                                    className="register-course-button"
                                    onClick={() => onCourseRegister(courses._id, courses.courseName, courses.courseCode, courses.creditHours)}>
                                        Register
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <h1>Registered Courses</h1>
                    <table className="courses-table">
                        <tr className="table-head">
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Credit Hours</th>
                            <th></th>
                        </tr>
                        {registeredCourses.map(registeredCourses => ( 
                            <tr className="table-content">
                                <td>{registeredCourses.courseName}</td>
                                <td>{registeredCourses.courseCode}</td>
                                <td>{registeredCourses.creditHours}</td>
                                <td><button onClick={() => onCourseDrop(registeredCourses._id)}>
                                        Drop
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
