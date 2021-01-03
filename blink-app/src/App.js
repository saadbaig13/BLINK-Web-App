// import './App.css';
import React, {useState, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// main
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StudentUserContext from './context/StudentUserContext';
import TeacherUserContext from './context/TeacherUserContext';
import Axios from 'axios';

// student
import StudentLogin from './main/StudentLogin/StudentLogin';
import StudentSignup from './main/StudentSignup/StudentSignup';

import Dashboard from './student/pages/Dashboard/Dashboard';
import CourseRegistration from './student/pages/CourseRegistration/CourseRegistration';
import Attendance from './student/pages/Attendance/Attendance';
import Media from './student/pages/Media/Media';
import Assignments from './student/pages/Assignments/Assignments';
import Quiz from './student/pages/Quiz/Quiz';
import Whiteboard from './student/pages/Whiteboard/Whiteboard';
import AcademicReport from './student/pages/AcademicReport/AcademicReport';
import FeeChallan from './student/pages/FeeChallan/FeeChallan';

// admin/teacher
import TeacherLogin from './main/TeacherLogin/TeacherLogin';
import TeacherSignup from './main/TeacherSignup/TeacherSignup';

import AdminDashboard from './admin/pages/AdminDashboard/AdminDashboard';
import AdminCourseRegistration from './admin/pages/AdminCourseRegistration/AdminCourseRegistration';
import AdminAttendance from './admin/pages/AdminAttendance/AdminAttendance';
import AdminMedia from './admin/pages/AdminMedia/AdminMedia';
import AdminAssignments from './admin/pages/AdminAssignments/AdminAssignments';
import AdminQuiz from './admin/pages/AdminQuiz/AdminQuiz';
import AdminWhiteboard from './admin/pages/AdminWhiteboard/AdminWhiteboard';
import AdminAcademicReport from './admin/pages/AdminAcademicReport/AdminAcademicReport';
import AdminFeeChallan from './admin/pages/AdminFeeChallan/AdminFeeChallan';

function App() {
  const [studentUserData, setStudentUserData] = useState({
    token: undefined,
    student: undefined
  });

  const [teacherUserData, setTeacherUserData] = useState({
    token: undefined,
    teacher: undefined
  });

  useEffect(() => {
    const checkStudentLogin = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await Axios.post(
        "http://localhost:5000/student/tokenIsValid",
        null,
        {headers: {"x-auth-token": token}}
      );
      if(tokenResponse.data) {
        const studentLoginResponse = await Axios.get(
          "http://localhost:5000/student/",
          {headers: {"x-auth-token": token}}
        );
        setStudentUserData({
          token,
          student: studentLoginResponse.data
        });
      }
    };

    const checkTeacherLogin = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await Axios.post(
        "http://localhost:5000/teacher/tokenIsValid",
        null,
        {headers: {"x-auth-token": token}}
      );
      if(tokenResponse.data) {
        const teacherLoginResponse = await Axios.get(
          "http://localhost:5000/teacher/",
          {headers: {"x-auth-token": token}}
        );
        setTeacherUserData({
          token,
          teacher: teacherLoginResponse.data
        });
      }
    };

    checkStudentLogin();
    checkTeacherLogin();
  }, []);

  return (
    <div className="App">
      <Router>
        <StudentUserContext.Provider value={{studentUserData, setStudentUserData}}>
          <Route exact path="/" component={StudentLogin} />
          <Route path="/StudentSignup" component={StudentSignup} />

          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/CourseRegistration" component={CourseRegistration} />
          <Route path="/Attendance" component={Attendance} />
          <Route path="/Media" component={Media} />
          <Route path="/Assignments" component={Assignments} />
          <Route path="/Quiz" component={Quiz} />
          <Route path="/Whiteboard" component={Whiteboard} />
          <Route path="/AcademicReport" component={AcademicReport} />
          <Route path="/FeeChallan" component={FeeChallan} />
        </StudentUserContext.Provider>

        <TeacherUserContext.Provider value={{teacherUserData, setTeacherUserData}}>
          <Route path="/TeacherLogin" component={TeacherLogin} />
          <Route path="/TeacherSignup" component={TeacherSignup} />

          <Route path="/AdminDashboard" component={AdminDashboard} />
          <Route path="/AdminCourseRegistration" component={AdminCourseRegistration} />
          <Route path="/AdminAttendance" component={AdminAttendance} />
          <Route path="/AdminMedia" component={AdminMedia} />
          <Route path="/AdminAssignments" component={AdminAssignments} />
          <Route path="/AdminQuiz" component={AdminQuiz} />
          <Route path="/AdminWhiteboard" component={AdminWhiteboard} />
          <Route path="/AdminAcademicReport" component={AdminAcademicReport} />
          <Route path="/AdminFeeChallan" component={AdminFeeChallan} />
        </TeacherUserContext.Provider>
      </Router>
    </div>
  )
}

export default App