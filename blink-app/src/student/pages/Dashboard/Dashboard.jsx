import React, {useState, useEffect} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import DCalendar from '../../components/DCalendar/DCalendar';
import './Dashboard.scss';

function Dashboard() {
    const [announcements, setAnnouncements] = useState([{
        _id: '',
        announcementTitle: '',
        announcementDesc: '',
        courseName: ''
    }])

    useEffect(() => {
        let token = localStorage.getItem("auth-token");

        fetch("http://localhost:5000/announcement/student/added",
        {headers: {"x-auth-token": token}}).then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => setAnnouncements(jsonRes));
    }, []);

    return (
        <div className="Dashboard">
            <Navigation />
            <div className="dashboard-main-container">
                <div class="dashboard-head">
                    <h3>01</h3>
                    <h2>Dashboard</h2>
                </div>
                <div class="dashboard-headimg"></div>
                <DCalendar />
                <div className="announcements">
                    {announcements.map(announcements => ( 
                        <div><p className="course-name">{announcements.courseName}</p><br></br>
                            <p className="title">{announcements.announcementTitle}</p><br></br>
                            <p className="desc">{announcements.announcementDesc}</p><hr></hr></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
