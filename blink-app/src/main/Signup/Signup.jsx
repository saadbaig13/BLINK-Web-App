import React from 'react';
import './Signup.scss';
import {Link} from 'react-router-dom';

function Signup() {
    return (
        <div>
            <div class="Signup">
            <div class="form-container">
                <div class="image-holder"></div>
                <form action="/Choose">
                    <div className="blink-logo"></div>
                    <h2 class="text-center">Sign Up</h2>
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
                        <div class="form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" required/>I agree to the license terms.
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                    <input class="btn btn-success btn-block" type="submit" value="Sign Up" />
                    </div>
                    <a class="already" href="#"><Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>Already have an account? <span>Login</span></Link></a>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Signup
