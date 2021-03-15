import React, {useState, useEffect} from 'react'
import Navigation from '../../components/Navigation/Navigation';
import './Attendance.scss';

function Attendance() {
    const [attendance, setAttendance] = useState([{
        _id: '',
        attendanceStatus: '',
        attendanceTime: '',
        courseName: ''
    }])

    useEffect(() => {
        let token = localStorage.getItem("auth-token");

        fetch("http://localhost:5000/attendance/studentAdded",
        {headers: {"x-auth-token": token}}
        ).then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => setAttendance(jsonRes));
    }, []);

    return (
        <div className="Attendance">
            <Navigation />
            <div className="attendance-main-container">
                <div class="attendance-head">
                    <h3>03</h3>
                    <h2>Attendance</h2>
                </div>
                <div class="attendance-headimg"></div>
                <table className="attendance-table">
                    <tr className="table-head">
                        <th>Course Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    {attendance.map(attendance => ( 
                        <tr className="table-content">
                            <td>{attendance.courseName}</td>
                            <td>{attendance.attendanceTime}</td>
                            <td>{attendance.attendanceStatus}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Attendance
