import React, { Component } from 'react';

import LoginValidatorComponent from '../loginvalidator.component';


class Login extends Component {
  constructor(){
    super()
    this.getVal = this.getVal.bind(this);
    this.state = {
      userObject:{}
    }
  }
  handleSubmit(){

  }

  getVal(val,name){
    let userObject = Object.assign({},this.state.userObject);
    userObject[name] = val;
    this.setState({userObject});
  }
  render() {
    let name = 'kaka';
    let type = 'password';
    let placeholder = 'this is shit';
    let label = '';
    return (
      <div className="App">
        <LoginValidatorComponent getVal={this.getVal} label={'Name'} type={'text'} placeholder={'Enter Name'} name={'name'}/>
        <LoginValidatorComponent getVal={this.getVal} label={'Password'} type={'password'} placeholder={'Enter Password'} name={'password'} min={6} validation={true}/>
        <LoginValidatorComponent getVal={this.getVal} label={'Email'} type={'email'} placeholder={'Enter Email'} name={'email'} validateEmail={true}/>
        <br/><button onClick={this.handleSubmit.bind(this)}>Signup</button>  
      </div>
    );
  }
}

export default Login;
