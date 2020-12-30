import React from 'react';
import './Login.scss';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="Login">
            <div class="form-container">
                <div class="image-holder"></div>
                <form action="/Dashboard">
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
                    <a class="already" href="#"><Link to="/Signup" style={{color: '#8fa3a3', textDecoration: 'inherit'}}>Don't have an account? <span>Sign Up</span></Link></a>
                </form>
            </div>
        </div>
    )
}

export default Login
