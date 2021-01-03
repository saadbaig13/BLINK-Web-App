import React from 'react'
import './TeacherSignup.scss';
import {Link} from 'react-router-dom';

function TeacherSignup() {
    return (
        <div>
            <div class="TSignup">
                <div class="form-container">
                    <div class="image-holder"></div>
                    <form action="/AdminDashboard">
                        <div className="blink-logo"></div>
                        <h2 class="text-center">Sign Up</h2>
                        <div class="form-group">
                            <input class="form-control" type="text" name="name" placeholder="Full Name" required/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="email" name="email" placeholder="Email" required/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" name="password" placeholder="Password" required/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" name="password-repeat" placeholder="Repeat Password" required/>
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
