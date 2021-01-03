import React from 'react'
import './TeacherLogin.scss';
import {Link} from 'react-router-dom';

function TeacherLogin() {
    return (
        <div className="TLogin">
            <div class="form-container">
                <div class="image-holder"></div>
                <form action="/AdminDashboard">
                    <div className="blink-logo"></div>
                    <h2 class="text-center">Login</h2>
                    <div class="form-group">
                        <input class="form-control" type="email" name="email" placeholder="Email" required/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" placeholder="Password" required/>
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
