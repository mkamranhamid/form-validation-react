import React, { Component } from 'react';

class LoginValidatorComponent extends Component {
    constructor(props){
        super(props)
        
         this.state = {
            validation:this.props.validation,
            min:this.props.min,
            errCheckForMinLength:'',
            errCheckForValidation:'',
            value:'',
            name: this.props.name,
            type: this.props.type,
            placeholder: this.props.placeholder,
          }

          this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        validation: React.PropTypes.bool,
        min: React.PropTypes.number,
        name: React.PropTypes.string,
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string
    };


    handleMin6(val, min){
        if(val.length < min){
            this.setState({errCheckForMinLength : `Err: value must be greater than 6`});
        } else {
            this.setState({errCheckForMinLength : ``});
        }
    }

    doValidation(val){
        if (/[a-zA-Z]/.test(val) && /[0-9]/.test(val) && /[&._-]/.test(val)) {
        // qry contains at least one letter, one number and one special character
            this.setState({errCheckForValidation : ``});
        } else{
            this.setState({errCheckForValidation : `Err: validation violated`});
        }
    }

    handleChange(e){
        this.setState({value : e.target.value});
        if(this.state.type == 'password' && this.state.min){
            this.handleMin6(e.target.value, this.state.min)
        }
        if(this.state.validation){
            this.doValidation(e.target.value)
        }
    }


  render() {
    return (
      <div className="App">
        name: <strong>{this.state.name}</strong> <br/>
        type: <strong>{this.state.type}</strong> <br/>
        placeholder: <strong>{this.state.placeholder}</strong><br/><br/>
        <strong>{this.state.errCheckForMinLength?this.state.errCheckForMinLength:''}</strong> <br/>
        <strong>{this.state.errCheckForValidation?this.state.errCheckForValidation:''}</strong> <br/>
        <input name={this.state.name} type={this.state.type} placeholder={this.state.placeholder} value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default LoginValidatorComponent;
