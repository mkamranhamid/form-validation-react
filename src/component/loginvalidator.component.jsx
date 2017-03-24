import React, { Component } from 'react';

class LoginValidatorComponent extends Component {
    constructor(props){
        super(props)
        
         this.state = {
            showErr:'',
            value:'',
            name: this.props.name,
            type: this.props.type,
            placeholder: this.props.placeholder,
          }

          this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        name: React.PropTypes.string,
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string
    };

    componentWillUpdate(nextProps, nextState){
        // perform any preparations for an upcoming update
        // this.handleMin6(nextState.value)
    }


    handleMin6(val){
        if(val.length < 6){
            this.setState({showErr : `Err: value must be greater than 6`});
        } else {
            this.setState({showErr : ``});
        }
    }

    handleChange(e){
        this.setState({value : e.target.value});
        if(this.state.type == 'password'){
            this.handleMin6(e.target.value)
        }
    }


  render() {
    return (
      <div className="App">
        <h1>KAKA</h1>
        name: <strong>{this.state.name}</strong> <br/>
        type: <strong>{this.state.type}</strong> <br/>
        placeholder: <strong>{this.state.placeholder}</strong><br/><br/>
        <strong>{this.state.showErr?this.state.showErr:''}</strong> <br/>
        <input name={this.state.name} type={this.state.type} placeholder={this.state.placeholder} value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default LoginValidatorComponent;
