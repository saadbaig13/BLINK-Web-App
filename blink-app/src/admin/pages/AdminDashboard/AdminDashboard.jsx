import React, {useState, useEffect} from 'react'
import AdminNavigation from '../../adminComponents/adminNavigation/AdminNavigation';
import AdminDCalendar from '../../adminComponents/adminDCalendar/AdminDCalendar';
import './AdminDashboard.scss';
import Axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert elevation={6} {...props} />;
}

function AdminDashboard() {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };
    
    const [courses, setCourses] = useState([{
        _id: '',
        courseName: '',
        courseCode: '',
        creditHours: ''
    }])

    const [announcements, setAnnouncements] = useState([{
        _id: '',
        announcementTitle: '',
        announcementDesc: '',
        courseName: ''
    }])

    useEffect(() => {
        const fetchCourses = async () => {
            fetch("http://localhost:5000/courses/added").then(res => {
                if(res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setCourses(jsonRes));
        };

        const fetchAnnouncements = async () => {
            fetch("http://localhost:5000/announcement/added").then(res => {
                if(res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setAnnouncements(jsonRes));
        };

        fetchCourses();
        fetchAnnouncements();
    }, []);

    const onAnnouncementDelete = (id) => {
        Axios.delete(`http://localhost:5000/announcement/${id}`).then((res) => {
            setOpen(true);
        });
    };

    return (
        <div className="AdminDashboard">
            <AdminNavigation />
            <div className="dashboard-main-container">
                <div class="dashboard-head">
                    <h3>01</h3>
                    <h2>Dashboard</h2>
                </div>
                <div class="dashboard-headimg"></div>
                <AdminDCalendar />
                <div className="announcements">
                    {announcements.map(announcements => ( 
                        <div><p className="course-name">{announcements.courseName}</p><br></br>
                            <p className="title">{announcements.announcementTitle}</p><br></br>
                            <p className="desc">{announcements.announcementDesc}</p>
                            <button className="remove-announcement-button" onClick={() => onAnnouncementDelete(announcements._id)}>
                                Remove
                            </button><hr></hr></div>
                    ))}
                    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="info">
                        Announcement Removed
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
