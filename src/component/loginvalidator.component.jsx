import React, { Component } from 'react';

class LoginValidatorComponent extends Component {
    constructor(props){
        super(props)
        
         this.state = {
            value:'',
            name: this.props.name,
            type: this.props.type,
            placeholder: this.props.placeholder,
          }

          this.handleChange = this.handleChange.bind(this);
          this.handleValue = this.handleValue.bind(this);
    }

    static propTypes = {
        name: React.PropTypes.string,
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string
    };

    handleChange(e){
        this.setState({value : e.target.value});
    }
    handleValue(){
        setTimeout(()=> {
            if(this.state.value.length<=6){
                this.setState({err:'less than 6'}
            }else
            {
                this.setState({err:'no err'})
            }
        }, 1000);
    }

  render() {
    return (
      <div className="App">
        <h1>KAKA</h1>
        name: <strong>{this.state.name}</strong> <br/>
        type: <strong>{this.state.type}</strong> <br/>
        placeholder: <strong>{this.state.placeholder}</strong><br/>
        {this.state.type == 'password'?'password must have length of 6':''} <br/>
        <input name={this.state.name} type={this.state.type} placeholder={this.state.placeholder} value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default LoginValidatorComponent;
