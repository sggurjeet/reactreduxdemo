import React, { Component } from 'react'
import './style.css'

class NewLogin extends Component {
  constructor(){
    super();
    this.state ={
      input:{
        username:'',
        password:'',
        email:''
      },
      errors:{}
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.validate=this.validate.bind(this);
  }
  //Handle Change Function
  handleChange(e){
    e.preventDefault();
    let input = this.state.input;
    input[e.target.name]=e.target.value;
    this.setState({input});
  }

  //Handle Submit Function
  handleSubmit(e) {
   e.preventDefault();
   if(this.validate()){
    console.log(this.state);
  
    let input = {};
    input["username"] = "";
    input["password"] = "";
    input["email"] = "";
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
      if(input["username"].trim().length < 6 || !re.test(input["username"])){
          isValid = false;
          errors["username"] = "Please enter valid username.";
      }
    } 
    //Email Validation
    if (!input["email"]){
      isValid = false;
      errors["email"] = "Please enter a valid email."
    }
    if(typeof input["email"] !== "undefined"){
      let lastAtPos = input["email"].lastIndexOf('@');
      let lastDotPos = input["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && input["email"].indexOf('@@') === -1 && lastDotPos > 2 && (input["email"].length - lastDotPos) > 2)) {
        isValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    //Password Validation
    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    if (typeof input["password"] !== "undefined") {
      if(input["password"].trim().length < 8){
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
      <div >
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
        {/* Username Input Field */}
        <div>
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              name="username" 
              value={this.state.input.username}
              onChange={this.handleChange}
              onBlur={this.validate}
              placeholder="Enter username" 
              id="username" />
              <br/>
              <div>{this.state.errors.username}</div>
              <br/>
          </div>
          {/* Email Input Field */}
          <div>
            <label htmlFor="Email">Email:</label>
            <input 
              type="email" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              onBlur={this.validate}
              placeholder="Enter your email" 
              id="email" />
              <br/>
              <div>{this.state.errors.email}</div>
              <br/>
          </div>
          {/* Password Input Field */}
          <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              onBlur={this.validate}
              placeholder="Enter Password" 
              id="Password" />
              <br/>
              <div>{this.state.errors.password}</div>
              <br/>
          </div>
          {/* Submit Input */}
          <input type="submit" value="Submit" />
         </form> 
      </div>
    )
  }
}

export default NewLogin
