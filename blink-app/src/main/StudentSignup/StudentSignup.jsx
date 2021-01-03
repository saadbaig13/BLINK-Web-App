import React, {useState, useContext} from 'react';
import './StudentSignup.scss';
import {Link, useHistory} from 'react-router-dom';
import Axios from 'axios';
import StudentUserContext from '../../context/StudentUserContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function StudentSignup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [error, setError] = useState("");

    const {setStudentUserData} = useContext(StudentUserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const newStudent = {name, email, password, passwordCheck};
            await Axios.post("http://localhost:5000/student/register", newStudent);
            const studentLoginResponse = await Axios.post("http://localhost:5000/student/login", {email, password});
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
        <div>
            <div class="SSignup">
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
                        <a class="areYouTeacher" href="#"><Link to="/TeacherSignup" style={{color: 'inherit', textDecoration: 'inherit'}}><span>Are you a Teacher?</span></Link></a>
                        <a class="already" href="#"><Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>Already have an account? <span>Login</span></Link></a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentSignup
