import React, {useState, useEffect} from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminCourseRegistration.scss';
import Modal from 'react-modal';
import Axios from 'axios';
import ErrorMessage from '../../../main/ErrorMessage/ErrorMessage';

const customStyle = {
    content: {

        border: 'none',
        boxShadow: '1px 1px 5px #cecece',
        margin: 'auto',
        width: '500px',
        height: '450px'
    }
};

Modal.setAppElement('#root');

function AdminCourseRegistration() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [error, setError] = useState("");

    const [courseName, setCourseName] = useState();
    const [courseCode, setCourseCode] = useState();
    const [creditHours, setCreditHours] = useState();

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

    const submit = async (e) => {
        e.preventDefault();

        try {
            const newCourse = {courseName, courseCode, creditHours};
            await Axios.post("http://localhost:5000/courses/", newCourse);
            setModalIsOpen(false);
        }
        catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    const onCourseDelete = (id) => {
        Axios.delete(`http://localhost:5000/courses/${id}`).then((res) => {
            alert("Course Deleted");
        });
    };

    return (
        <div className="AdminCourseRegistration">
            <AdminNavigation />
            <div className="course-main-container">
                <div className="course-head">
                    <h3>02</h3>
                    <h2>Course Registration</h2>
                </div>
                <div className="course-headimg"></div>
                <div className="courses">
                    <button className="add-course-button" onClick={() => setModalIsOpen(true)}>Add a course</button>
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
                                <td><button onClick={() => onCourseDelete(courses._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <Modal isOpen={modalIsOpen} style={customStyle} onRequestClose={() => setModalIsOpen(false)}>
                        <div className="course-modal">
                            <form onSubmit={submit}>
                                <h3>Course Details</h3>

                                {error && <ErrorMessage message={error} clearError={() => setError(undefined)} />}
                                
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="courseName"
                                        placeholder="Name"
                                        onChange={(e) => setCourseName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="courseCode"
                                        placeholder="Code"
                                        onChange={(e) => setCourseCode(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="creditHours"
                                        placeholder="Credit Hours"
                                        onChange={(e) => setCreditHours(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input className="btn btn-success btn-block" type="submit" value="Add Course"/>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default AdminCourseRegistration
