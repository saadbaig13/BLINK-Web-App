// import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// main
import Login from './main/Login/Login';
import Signup from './main/Signup/Signup';
import Choose from './main/Choose/Choose';

// student
import Dashboard from './student/pages/Dashboard/Dashboard';
import CourseRegistration from './student/pages/CourseRegistration/CourseRegistration';
import Attendance from './student/pages/Attendance/Attendance';
import Media from './student/pages/Media/Media';
import Assignments from './student/pages/Assignments/Assignments';
import Quiz from './student/pages/Quiz/Quiz';
import Whiteboard from './student/pages/Whiteboard/Whiteboard';
import AcademicReport from './student/pages/AcademicReport/AcademicReport';
import FeeChallan from './student/pages/FeeChallan/FeeChallan';

// admin
import AdminDashboard from './admin/pages/AdminDashboard/AdminDashboard';
import AdminCourseRegistration from './admin/pages/AdminCourseRegistration/AdminCourseRegistration';
import AdminAttendance from './admin/pages/AdminAttendance/AdminAttendance';
import AdminMedia from './admin/pages/AdminMedia/AdminMedia';
import AdminAssignments from './admin/pages/AdminAssignments/AdminAssignments';
import AdminQuiz from './admin/pages/AdminQuiz/AdminQuiz';
import AdminWhiteboard from './admin/pages/AdminWhiteboard/AdminWhiteboard';
import AdminAcademicReport from './admin/pages/AdminAcademicReport/AdminAcademicReport';
import AdminFeeChallan from './admin/pages/AdminFeeChallan/AdminFeeChallan';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Choose" component={Choose} />

        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/CourseRegistration" component={CourseRegistration} />
        <Route path="/Attendance" component={Attendance} />
        <Route path="/Media" component={Media} />
        <Route path="/Assignments" component={Assignments} />
        <Route path="/Quiz" component={Quiz} />
        <Route path="/Whiteboard" component={Whiteboard} />
        <Route path="/AcademicReport" component={AcademicReport} />
        <Route path="/FeeChallan" component={FeeChallan} />

        <Route path="/AdminDashboard" component={AdminDashboard} />
        <Route path="/AdminCourseRegistration" component={AdminCourseRegistration} />
        <Route path="/AdminAttendance" component={AdminAttendance} />
        <Route path="/AdminMedia" component={AdminMedia} />
        <Route path="/AdminAssignments" component={AdminAssignments} />
        <Route path="/AdminQuiz" component={AdminQuiz} />
        <Route path="/AdminWhiteboard" component={AdminWhiteboard} />
        <Route path="/AdminAcademicReport" component={AdminAcademicReport} />
        <Route path="/AdminFeeChallan" component={AdminFeeChallan} />
      </Router>
    </div>
  )
}

export default App