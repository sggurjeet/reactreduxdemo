import React, { Component } from 'react'

class NewLogin extends Component {
  constructor(){
    super();
    this.state ={
      input:{
        username:'',
        password:''
      },
      errors:{}
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
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
      <div>
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
              onBlur={this.handleSubmit}
              placeholder="Enter username" 
              id="username" />
              <br/>
              <div>{this.state.errors.username}</div>
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
              onBlur={this.handleSubmit}
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
