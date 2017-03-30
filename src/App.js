import React, { Component } from 'react';

import Login from './component/Login/login';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Signin</h1>
        </div>
        <Login/>
      </div>
    );
  }
}

export default App;
