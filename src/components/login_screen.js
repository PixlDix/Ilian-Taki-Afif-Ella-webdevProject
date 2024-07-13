import React from 'react';
import './../App.css';
import { NavLink } from 'react-router-dom';

const login_screen = () => {  
    return(
        <div>
            <div>
                <h1 className="welcomeText">
                    Welcome to
                </h1>
                <h1 className="loginText">
                    TypeWay
                </h1>
            </div>

            <div>
                <div>
                    <NavLink className="logInScreenButtons" to="/signinform">Log in/Sign Up</NavLink><br/>
                    <NavLink className="logInScreenButtons" to="/options_screen">Continue as guest</NavLink>
                </div>
            </div>
        </div>
    );
}

export default login_screen;