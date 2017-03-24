import React, { Component } from 'react';

import LoginValidatorComponent from './component/loginvalidator.component';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    let name = 'kaka';
    let type = 'password';
    let placeholder = 'this is shit';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <LoginValidatorComponent type={type} placeholder={placeholder} name={name}/>
      </div>
    );
  }
}

export default App;
