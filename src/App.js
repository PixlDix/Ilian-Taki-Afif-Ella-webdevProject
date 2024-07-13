import React, { Component } from 'react';
import './App.css';
import login_screen from './components/login_screen';
import options_screen from './components/options_screen';
import typingTest from './components/typingTest';
import Results_screen from './components/Results_screen';
import signinform from './components/signinform';
import signupform from './components/signupform';
import Timer from './components/Timer';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {  
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path='/' component={login_screen} />
          <Route path='/options_screen' component={options_screen} />
          <Route path='/typingTest' component={typingTest} />
          <Route path='/results_screen' component={Results_screen} />
          <Route path='/signinform' component={signinform} />
          <Route path='/signupform' component={signupform} />
          <Route path='/timer' component={Timer} />
        </div>
      </BrowserRouter>  
    )
  }
}

export default App;
