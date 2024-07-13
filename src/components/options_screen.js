import React from "react";
import './../App.css';
import { NavLink } from "react-router-dom";
import NavBar from './NavBar';

const options_screen = () => {
    return(
        <div> 
            <NavBar />
            
            <div>
                <h1 className='optionsText'>Please select what you would like to do.</h1>
            </div>

            <div>
                <NavLink className="optionScreenButton" to="/typingTest">Typing Test</NavLink>
            </div>
        </div>
    );
}


export default options_screen;