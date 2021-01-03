import React, {useState, useContext} from 'react'
import './TeacherSignup.scss';
import {Link, useHistory} from 'react-router-dom';
import Axios from 'axios';
import TeacherUserContext from '../../context/TeacherUserContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function TeacherSignup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [error, setError] = useState("");

    const {setTeacherUserData} = useContext(TeacherUserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const newTeacher = {name, email, password, passwordCheck};
            await Axios.post("http://localhost:5000/teacher/register", newTeacher);
            const teacherLoginResponse = await Axios.post("http://localhost:5000/teacher/login", {email, password});
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
        <div>
            <div class="TSignup">
                <div class="form-container">
                    <div class="image-holder"></div>
                    <form onSubmit={submit}>
                        <div className="blink-logo"></div>
                        <h2 class="text-center">Sign Up</h2>

                        {error && <ErrorMessage message={error} clearError={() => setError(undefined)} />}

                        <div class="form-group">
                            <input
                                class="form-control"
                                type="text" 
                                name="name" 
                                placeholder="Full Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
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
                            <input
                                class="form-control"
                                type="password"
                                name="password-repeat"
                                placeholder="Repeat Password"
                                onChange={(e) => setPasswordCheck(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                        <input class="btn btn-success btn-block" type="submit" value="Sign Up" />
                        </div>
                        <a class="areYouStudent" href="#"><Link to="/StudentSignup" style={{color: 'inherit', textDecoration: 'inherit'}}><span>Are you a Student?</span></Link></a>
                        <a class="already" href="#"><Link to="/TeacherLogin" style={{color: 'inherit', textDecoration: 'inherit'}}>Already have an account? <span>Login</span></Link></a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TeacherSignup
