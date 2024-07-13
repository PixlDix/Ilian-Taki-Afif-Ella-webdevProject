import React, { Component } from 'react';
import './../App.css'
import NavBar from './NavBar'
import TypeManager from './TypeManager';

class typingTest extends Component {

    shuffle(a) {
        for (let i=0; i<a.length; i++) {
            const j = Math.floor(Math.random() * a.length);
            [a[i], a[j]] = [a[j], a[i]];
        };
        return a;
    }    

	wordList = [
        "section","interior","huge","rod","gave","itself","being","raw","pleasant","they","level",
		"breeze","fast","contain","forget","tube","hearing","upon","hunt","review","depend",
		"face","open","slow","fat","thee","whispered","grown","near","shake","itself",
		"interest","girl","few","silly","vote","leader","become","to","pen","mass",
		"month","itself","hair","main","largest","rope","front","nearly","student","judge",
		"home","extra","again","divide","soon","year","worried","lower","cave","check",
		"tongue","weigh","thrown","television","basket","win","design","only","battle","highway",
		"concerned","solid","union","escape","proud","pile","gate","topic","farm","atomic",
		"oxygen","discover","gasoline","box","rhythm","gift","carry","funny","sister","having",
		"teach","finest","whose","additional","thus","accident","green","post","actual","hay",
		"attention","account","weak","check","till","adjective","increase","value","whom","whispered"
    ];

    shuffledWords=this.shuffle(this.wordList).join(' ');

    state={
        showText: false
    }

    startTyping = (e) =>{
        e.preventDefault();
        document.getElementById('typingTestHelpText').innerHTML = '';
        document.getElementById('textbutton').innerHTML = '';
        this.setState({showText: true});
    }

    render(){
        return(
            <div>
                <NavBar />
                
                <div id='typingTestHelpText'>
                    <h1 className='typingTestHelpText'>Timer starts when you press begin</h1>
                </div>

                {this.state.showText === true && <TypeManager text={this.shuffledWords}/>}

                <div> 
                    <div id='textbutton' >
                        <button className='textbutton' onClick={this.startTyping}>Begin</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default typingTest;