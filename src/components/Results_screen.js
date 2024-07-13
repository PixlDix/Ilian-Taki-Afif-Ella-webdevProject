import React, { Component } from "react";
import './../App.css';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../store/Actions/dataActions'
import NavBar from "./NavBar";

class Results_screen extends Component {
    render(){

        const assessSpeed = (cpm) => {
            if(cpm>=0 && cpm<=49) {
                return 'You type at a very slow speed';
            } else if (cpm>=50 && cpm<=149) {
                return 'You type at a slow speed';
            } else if (cpm>=150 && cpm<=249) {
                return 'You type at an average speed';
            } else if (cpm>=250 && cpm<=349) {
                return 'You type at a fast speed';
            } else {
                return 'You type at a very fast speed';
            }
            
        }

        const wpm = this.props.history.location.state.wpm
        const cpm = this.props.history.location.state.cpm
        const accuracy = this.props.history.location.state.accuracy
        this.props.submitAction(wpm, cpm, accuracy)
        return(
            <div> 
                <NavBar />
    
                <div className='finishText'>
                    <h1>The results are in! You scored the following:</h1>
                </div>

                <div className='scoreContainer'>
                    <div>
                        <h2 className='assessedSpeed'>{assessSpeed(cpm)}</h2>
                    </div>
                    <div>
                        <h2 className='finalScores'>
                            Words per minute: {wpm} <br /> <br />
                            Characters per minute: {cpm} <br /> <br />
                            Accuracy: {accuracy}% 
                        </h2>  
                    </div>
                    
                    <li className='finaloptions'><NavLink to="/typingTest">Try for a better score</NavLink></li>
                    <li className='finaloptions'><NavLink to="/options_screen">Try something else</NavLink></li>
                </div>    
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitAction: (wpm, cpm, accuracy) => {
            dispatch(actions.DISPLAY_SCORE(wpm, cpm, accuracy))
        }
    }
}

export default connect(null, mapDispatchToProps, null, {forwardRef: true})(Results_screen);