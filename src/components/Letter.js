import React, { Component } from "react";
import './../App.css'


class Letter extends Component{
    render(){
        let classn = 'letterneutral';
        if (this.props.active) {
            classn = 'current';        
        } 
        const character = (this.props.letter === ' ') ? '•' : this.props.letter;
        return(
            <span className={classn}>{character}</span>
        );
    }
}

export default Letter;