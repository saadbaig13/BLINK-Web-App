import React, {useState, useContext} from 'react'
import './TeacherLogin.scss';
import {Link, useHistory} from 'react-router-dom';
import Axios from 'axios';
import TeacherUserContext from '../../context/TeacherUserContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function TeacherLogin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const {setTeacherUserData} = useContext(TeacherUserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const loginTeacher = {email, password};
            const teacherLoginResponse = await Axios.post("http://localhost:5000/teacher/login", loginTeacher);
            setTeacherUserData({
                token: teacherLoginResponse.data.token,
                teacher: teacherLoginResponse.data.teacher
            });
            localStorage.setItem("auth-token", teacherLoginResponse.data.token);
            history.push("/AdminDashboard");
        }
        catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (
        <div className="TLogin">
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
                    <a class="areYouStudent" href="#"><Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}><span>Are you a Student?</span></Link></a>
                    <a class="already" href="#"><Link to="/TeacherSignup" style={{color: '#8fa3a3', textDecoration: 'inherit'}}>Don't have an account? <span>Sign Up</span></Link></a>
                </form>
            </div>
        </div>
    )
}

export default TeacherLogin
