import React, { Component } from 'react';

class LoginValidatorComponent extends Component {
    constructor(props){
        super(props)
        
         this.state = {
            validation:this.props.validation,
            validateEmail: this.props.validateEmail,
            min:this.props.min,
            errCheckForEmail:'',
            errCheckForMinLength:'',
            errCheckForValidation:'',
            value:'',
            label: this.props.label,
            name: this.props.name,
            type: this.props.type,
            placeholder: this.props.placeholder,
          }

          this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        validateEmail: React.PropTypes.bool,
        getVal:React.PropTypes.func,
        label: React.PropTypes.string,
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

    validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    handleChange(e){
        this.setState({value : e.target.value});
        this.props.getVal(e.target.value,this.state.name);
        // console.log(this.state.value)
        if(this.state.type == 'password' && this.state.min){
            this.handleMin6(e.target.value, this.state.min)
        }
        if(this.state.type == 'password' && this.state.validation){
            this.doValidation(e.target.value)
        }

        if(this.state.type == 'email' && this.state.validateEmail){
            if(this.validateEmail(e.target.value)){
                this.setState({errCheckForEmail: ''})
            } else{
                this.setState({errCheckForEmail: 'Err: email validation violated'})
            }
        }
    }


  render() {
    return (
      <div>
        <strong>{this.state.errCheckForMinLength?this.state.errCheckForMinLength:''}</strong> <br/>
        <strong>{this.state.errCheckForValidation?this.state.errCheckForValidation:''}</strong> <br/>
        <strong>{this.state.errCheckForEmail?this.state.errCheckForEmail:''}</strong> <br/>
        <label htmlFor={this.state.name}>{this.state.label?this.state.label:this.state.name} </label>
        <input name={this.state.name} type={this.state.type} placeholder={this.state.placeholder} value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default LoginValidatorComponent;
