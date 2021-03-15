import React, {useState, useEffect} from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import './AdminCourseRegistration.scss';
import Modal from 'react-modal';
import Axios from 'axios';
import ErrorMessage from '../../../main/ErrorMessage/ErrorMessage';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert elevation={6} {...props} />;
}

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
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = React.useState(false);

    const handleCloseOne = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpenOne(false);
    };

    const handleCloseTwo = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpenTwo(false);
    };

    const handleCloseThree = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpenThree(false);
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTwoIsOpen, setModalTwoIsOpen] = useState(false);
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

    const [announcementTitle, setAnnouncementTitle] = useState();
    const [announcementDesc, setAnnouncementDesc] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/courses/added").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => setCourses(jsonRes));
    }, []);

    const submit = async (e) => {
        e.preventDefault();

        try {
            const newCourse = {courseName, courseCode, creditHours};
            await Axios.post("http://localhost:5000/courses/", newCourse);
            setModalIsOpen(false);
            setOpenOne(true);
        }
        catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    const onCourseDelete = (id) => {
        Axios.delete(`http://localhost:5000/courses/${id}`).then((res) => {
            setOpenTwo(true);
        });
    };

    const announceSubmit = async (e) => {
        e.preventDefault();

        try {
            const newAnnouncement = {announcementTitle, announcementDesc};
            await Axios.post(`http://localhost:5000/announcement/${courseName}`, newAnnouncement);
            setModalTwoIsOpen(false);
            setOpenThree(true);
        }
        catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
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
                    <button className="announce-button" onClick={() => setModalTwoIsOpen(true)}>Add an Announcement</button>
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
                                        Remove
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
                    <Modal isOpen={modalTwoIsOpen} style={customStyle} onRequestClose={() => setModalTwoIsOpen(false)}>
                        <div className="course-modal">
                            <form onSubmit={announceSubmit}>
                                <h3>Announcement Details</h3>

                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="AnnouncementTitle"
                                        placeholder="Title"
                                        onChange={(e) => setAnnouncementTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="AnnouncementDesc"
                                        placeholder="Description"
                                        onChange={(e) => setAnnouncementDesc(e.target.value)}
                                    />
                                </div>
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
                                </div>
                                <div className="form-group">
                                    <input className="btn btn-success btn-block" type="submit" value="Add Announcement"/>
                                </div>
                            </form>
                        </div>
                    </Modal>
                    <Snackbar open={openOne} autoHideDuration={3000} onClose={handleCloseOne}>
                        <Alert onClose={handleCloseOne} severity="success">
                        Course Added
                        </Alert>
                    </Snackbar>
                    <Snackbar open={openTwo} autoHideDuration={3000} onClose={handleCloseTwo}>
                        <Alert onClose={handleCloseTwo} severity="info">
                        Course Removed
                        </Alert>
                    </Snackbar>
                    <Snackbar open={openThree} autoHideDuration={3000} onClose={handleCloseThree}>
                        <Alert onClose={handleCloseThree} severity="success">
                        Announcement Added
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    )
}

export default AdminCourseRegistration
