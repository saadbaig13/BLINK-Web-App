import React, {useState, useContext} from 'react';
import './StudentLogin.scss';
import {Link, useHistory} from 'react-router-dom';
import Axios from 'axios';
import StudentUserContext from '../../context/StudentUserContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function StudentLogin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const {setStudentUserData} = useContext(StudentUserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const loginStudent = {email, password};
            const studentLoginResponse = await Axios.post("http://localhost:5000/student/login", loginStudent);
            setStudentUserData({
                token: studentLoginResponse.data.token,
                student: studentLoginResponse.data.student
            });
            localStorage.setItem("auth-token", studentLoginResponse.data.token);
            history.push("/Dashboard");
        }
        catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (
        <div className="SLogin">
            <div class="form-container">
                <div class="image-holder"></div>
                <form onSubmit={submit}>
                    <div className="blink-logo"></div>
                    <h2 class="text-center">Login</h2>

                    {error && <ErrorMessage message={error} clearError={() => setError(undefined)} />}

                    <div class="form-group">
                        <input
                            class="form-control"
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            class="form-control"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <input class="btn btn-success btn-block" type="submit" value="Login" />
                    </div>
                    <a class="areYouTeacher" href="#"><Link to="/TeacherLogin" style={{color: 'inherit', textDecoration: 'inherit'}}><span>Are you a Teacher?</span></Link></a>
                    <a class="already" href="#"><Link to="/StudentSignup" style={{color: '#8fa3a3', textDecoration: 'inherit'}}>Don't have an account? <span>Sign Up</span></Link></a>
                    <a class="whiteboard" href={'http://localhost:3006'}>Whiteboard</a>
                </form>
            </div>
        </div>
    )
}

export default StudentLogin
