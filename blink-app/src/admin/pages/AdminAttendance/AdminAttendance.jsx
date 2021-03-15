import React, {useState, useEffect} from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminAttendance.scss';
import Axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert elevation={6} {...props} />;
}

function AdminAttendance() {
    const [openPresent, setOpenPresent] = useState(false);
    const [openAbsent, setOpenAbsent] = useState(false);

    const handleClosePresent = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpenPresent(false);
    };

    const handleCloseAbsent = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpenAbsent(false);
    };

    const [students, setStudents] = useState([{
        _id: '',
        name: '',
        email: '',
        password: ''
    }])

    const [courseName, setCourseName] = useState();
    const [courses, setCourses] = useState([{
        _id: '',
        courseName: '',
        courseCode: '',
        creditHours: ''
    }])

    const [attendanceStatus, setAttendanceStatus] = useState();

    useEffect(() => {
        const fetchCourses = async () => {
            fetch("http://localhost:5000/courses/added").then(res => {
                if(res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setCourses(jsonRes));
        };

        const fetchStudents = async () => {
            fetch(`http://localhost:5000/student/added/${courseName}`).then(res => {
                if(res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setStudents(jsonRes));
        };

        fetchCourses();
        fetchStudents();
    }, [courseName]);

    const onMarkPresent = (id) => {
        setAttendanceStatus('Present');
        Axios.post(`http://localhost:5000/attendance/${courseName}/${id}/${attendanceStatus}`).then((res) => {
            setOpenPresent(true);
        });
    };

    const onMarkAbsent = (id) => {
        setAttendanceStatus('Absent');
        Axios.post(`http://localhost:5000/attendance/${courseName}/${id}/${attendanceStatus}`).then((res) => {
            setOpenAbsent(true);
        });
    };

    return (
        <div className="AdminAttendance">
            <AdminNavigation />
            <div className="attendance-main-container">
                <div class="attendance-head">
                    <h3>03</h3>
                    <h2>Attendance</h2>
                </div>
                <div class="attendance-headimg"></div>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="courseName"
                        onChange={(e) => setCourseName(e.target.value)}>
                        <option value="" disabled selected>Select a Course</option>
                        {courses.map(courses => (
                            <option>{courses.courseName}</option>
                        ))}
                    </select>
                    <table className="attendance-table">
                        <tr className="table-head">
                            <th>Student Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                        {students.map(students => ( 
                            <tr className="table-content">
                                <td>{students.name}</td>
                                <td>{students.email}</td>
                                <td><button className="present-button" onClick={() => onMarkPresent(students._id)}>
                                        Present
                                    </button>
                                </td>
                                <td><button className="absent-button" onClick={() => onMarkAbsent(students._id)}>
                                        Absent
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <Snackbar open={openPresent} autoHideDuration={3000} onClose={handleClosePresent}>
                        <Alert onClose={handleClosePresent} severity="success">
                        Marked Present
                        </Alert>
                    </Snackbar>
                    <Snackbar open={openAbsent} autoHideDuration={3000} onClose={handleCloseAbsent}>
                        <Alert onClose={handleCloseAbsent} severity="error">
                        Marked Absent
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    )
}

export default AdminAttendance
