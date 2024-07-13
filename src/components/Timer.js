import React, { Component } from "react";
import './../App.css';
import { Redirect } from "react-router-dom";

class Timer extends Component {
    state={
        count: 60,
        redirect: null
    }

    myInterval = null;
    
    render() {
        return(
            <div>
                <div>
                    <h1 className='timer'>Time left: {this.state.count}</h1>
                </div>
                
                {this.state.redirect}
            </div>
        );
    }

    componentDidMount(){
        this.myInterval = setInterval(() => {
            if(this.state.count === 0 || this.props.textLength === 0) {
                clearInterval(this.myInterval);
                this.myInterval = null;
                const { wpm, cpm, accuracy } = this.props;
                this.setState({
                    redirect: <Redirect to={{
                        pathname: './Results_screen',
                        state: {wpm: wpm, cpm: cpm, accuracy: accuracy}
                    }} />
                });
            } else {
                this.setState({
                    count: this.state.count - 1
                })
            }
        }, 1000);
    }

    componentWillUnmount(){
        if(this.myInterval !== null){
            clearInterval(this.myInterval);
        }
    }
}


export default Timer;