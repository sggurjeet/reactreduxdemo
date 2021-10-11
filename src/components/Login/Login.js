import React, { Component } from 'react'
import './style.css'


export class Login extends Component {
    constructor() {
        super();
    
        //Set Initial State
        this.state = {
            input: {
              username:'',
              password:''
            },
            errors:{}

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
      }

    // add checkfield for username length and password length and it doesn't submit until and unless form is complete, onblur error should display that email is empty or email invalid in case of empty field.
    //  handleChange = (e) => {
    //     e.preventDefault();
    //     const {value,name} = e.target;
    //     this.setState({ [name]:value});
    //   };
      handleChange(e) {
        let input = this.state.input;
        input[e.target.name] = e.target.value;
      
        this.setState({
          input
        });
      }
      handleSubmit(e) {
          e.preventDefault();
          if(this.validate()){
            console.log(this.state);
          
            let input = {};
            input["username"] = "";
            input["password"] = "";
            this.setState({input:input});
      
            alert('Form is now submitted');
        }

      }
      validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
      //Username Validation
        if (!input["username"]) {
          isValid = false;
          errors["username"] = "Please enter your username.";
        }
    
        if (typeof input["username"] !== "undefined") {
          const re = /^\S*$/;
          if(input["username"].length < 6 || !re.test(input["username"])){
              isValid = false;
              errors["username"] = "Please enter valid username.";
          }
        }
       //Password Validation
        if (!input["password"]) {
          isValid = false;
          errors["password"] = "Please enter your password.";
        }

        if (typeof input["password"] !== "undefined") {
          if(input["password"].length < 8){
              isValid = false;
              errors["password"] = "Please add at least 8 charachter.";
          }
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    
     
    render() {
        return (
              <div className="form">
                <form onSubmit={this.handleSubmit}>
                  <h2>Sign In</h2>
                    <input type="text" name="username"  placeholder="Username" value={this.state.input.username} id ="username" onChange={this.handleChange} /> 
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit}>
                      Submit
                    </button>
                </form>
              
            </div>
           
        )
    }
}

export default Login
