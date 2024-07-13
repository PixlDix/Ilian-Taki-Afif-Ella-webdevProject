import React, { Component } from "react";
import correct from '../audio/correct.mp3';
import incorrect from '../audio/incorrect.mp3';
import './../App.css';
import Timer from './Timer';
import Text from './Text';

class TypeManager extends Component{

    componentDidMount() {
        document.body.addEventListener('keyup', this.typeListener);
        const { text } = this.props
        this.setPractice(text)
    }

    componentWillUnmount() {
        document.body.removeEventListener('keyup', this.typeListener);
    }


    state = {
        listening: false,
        currentPosition: 0,
        correctLetters: 0,
        incorrectLetters: 0,
        totalLetters: 0,
        totalWords: 0,
        practiceText: '',
    }

    setPractice(text) {
        this.setState({
            listening: true,
            correctLetters: 0,
            incorrectLetters: 0,
            totalLetters: 0,
            totalWords: 0,
            practiceText: text,
        });
    }

    correctBeep = new Audio (correct)
    incorrectBeep = new Audio (incorrect)

    typeListener = (event) => {
        if (this.state.listening) {
            if (event.key) {
                if (event.key.length === 1) {
                    event.preventDefault();
                    let correctLetters = this.state.correctLetters;
                    let incorrectLetters = this.state.incorrectLetters;
                    let totalLetters = this.state.totalLetters;
                    let totalWords = this.state.totalWords;
                    let listening = true;
                    if (event.key === ' '){
                        totalWords++;        
                    }
                    if (event.key === this.state.practiceText[0]) {
                        correctLetters++;
                        totalLetters++;
                        this.correctBeep.play();
                        this.lastLetterCorrect = true;
                    } else {
                        incorrectLetters++;
                        totalLetters++;
                        this.incorrectBeep.play();
                        this.lastLetterCorrect = false;
                    }
                    const currentPosition = 0;
                    if (currentPosition >= this.state.practiceText.length) {
                        listening = false;
                    }

                    this.setState({
                        correctLetters,
                        incorrectLetters,
                        totalLetters,
                        totalWords,
                        listening,
                        practiceText: this.state.practiceText.substring(1, this.state.practiceText.length)
                    });
                }
            }
        }
    }

    render(){   
        const wpm = this.state.totalWords; 
        const cpm = this.state.totalLetters;
        const accuracyGenerator = Math.round(this.state.correctLetters / (this.state.correctLetters + this.state.incorrectLetters) * 100)
        const accuracy = (isNaN(accuracyGenerator) ? 0 : accuracyGenerator);
        return(
            <div>
                <div>
                    <Text text={this.state.practiceText} correctLetters={this.state.correctLetters} incorrectLetters={this.state.incorrectLetters}/>
                </div>

                <div className='statContainer'>
                    <Timer wpm={wpm} cpm={cpm} accuracy={accuracy} textLength={this.state.practiceText.length}/>
                    <h1 className='liveStats'>WPM: { wpm }  CPM: { cpm }  Accuracy: { accuracy }%</h1>
                </div>
            </div>
        );
    }
}


export default TypeManager;