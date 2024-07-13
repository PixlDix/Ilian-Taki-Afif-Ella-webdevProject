import React, { Component } from "react";
import './../App.css';
import Letter from './Letter'

class Text extends Component {

    state = {
        letters: []
    }

    render(){
        const { text } = this.props;
        const textToLetters = text.split('');
        const textItems = [];
        for(let i = 0; i < textToLetters.length; i++) {
            const itemProps = {
                letter: textToLetters[i],
                active: (i === 0),
            };
            const itemKey = 'TC' + i.toString();
            textItems.push(<Letter { ...itemProps } key={itemKey} />);
        }
        return(
            <div className='typingTestTextContainer'>
                <div className='typingTestText'> 
                    {textItems}
                </div>
            </div>
        );
    }
}

export default Text;