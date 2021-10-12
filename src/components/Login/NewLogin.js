import React, { Component } from "react";
import "./style.css";

class NewLogin extends Component {
  constructor() {
    super();
    this.state = {
      input: {
        username: "",
        fullname: "",
        password: "",
        email: "",
      },
      errors: {},
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.validateUserName = this.validateUserName.bind(this);
    // this.validateFullName = this.validateFullName.bind(this);
    // this.validateEmail = this.validateEmail.bind(this);
    // this.validatePassword = this.validatePassword.bind(this);
    // this.validate = this.validate.bind(this);
  }
  //Handle Change Function
  handleChange = (e) => {
    e.preventDefault();
    let input = this.state.input;
    input[e.target.name] = e.target.value;
    this.setState({ input });
  };

  //Handle Submit Function
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["username"] = "";
      input["fullname"] = "";
      input["password"] = "";
      input["email"] = "";
      this.setState({ input: input });

      alert(`${this.state.input.username} your form is submitted`);
    }
  };

  //INDEPENDENT VALIDATION SO AS ONLY THE FIELD THAT HAS AN ERROR WILL THROW IT OTHERWISE
  //Independent Validation for Username
  validateUserName = () => {
    const { input } = this.state;
    const errors = {};

    let isValid = true;

    const re = /^\S*$/;

    if (!input.username) {
      isValid = false;
      errors["username"] = "Please enter your username.";
    } else if (
      input.username?.trim().length < 6 ||
      !re.test(input["username"])
    ) {
      isValid = false;
      errors["username"] = "Please enter valid username.";
    } else {
      errors["username"] = "";
    }

    this.setState((prevState) => ({
      errors: { ...prevState.errors, ...errors },
    }));
    return isValid;
  };

  //Independent Validation for Fullname
  validateFullName = () => {
    const { input } = this.state;
    const errors = {};

    let isValid = true;

    const re = /^\S*$/;

    if (!input.fullname) {
      isValid = false;
      errors["fullname"] = "Please enter your fullname.";
    } else if (
      input.fullname?.trim().length < 6 ||
      !re.test(input["fullname"])
    ) {
      isValid = false;
      errors["fullname"] = "Please enter valid fullname.";
    } else {
      errors["fullname"] = "";
    }

    this.setState((prevState) => ({
      errors: { ...prevState.errors, ...errors },
    }));
    return isValid;
  };

  //Independent Validation for Email
  validateEmail = () => {
    const { input } = this.state;
    const errors = {};

    let isValid = true;
    let lastAtPos = input["email"].lastIndexOf("@");
    let lastDotPos = input["email"].lastIndexOf(".");

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter a valid email.";
    } else if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        input["email"].indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        input["email"].length - lastDotPos > 2
      )
    ) {
      isValid = false;
      errors["email"] = "Email is not valid";
    } else {
      errors["email"] = "";
    }

    this.setState((prevState) => ({
      errors: { ...prevState.errors, ...errors },
    }));
    return isValid;
  };
  //Independent Validation for Password
  validatePassword = () => {
    const { input } = this.state;
    const errors = {};
    let isValid = true;

    if (!input.password) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    } else if (input.password?.trim().length < 8) {
      isValid = false;
      errors["password"] = "Please add at least 8 charachter.";
    } else {
      errors["password"] = "";
    }

    this.setState((prevState) => ({
      errors: { ...prevState.errors, ...errors },
    }));
    return isValid;
  };
  validate = () => {
    let errors = {};
    let isValid = true;

    //Username Validation
    isValid = this.validateUserName();

    //Fullname Validation
    isValid = this.validateFullName();

    //Email Validation
    isValid = this.validateEmail();

    //Password Validation
    isValid = this.validatePassword();

    this.setState((prevState) => ({
      errors: { ...prevState.errors, ...errors },
    }));

    return isValid;
  };

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          {/* Username Input Field */}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.input.username}
              onChange={this.handleChange}
              onBlur={this.validateUserName}
              placeholder="Enter username"
              id="username"
            />
            <br />
            <div>{this.state.errors.username}</div>
            <br />
          </div>
          {/* FullName Input Field */}
          <div>
            <label htmlFor="Fullname">Fullname:</label>
            <input
              type="text"
              name="fullname"
              value={this.state.input.fullname}
              onChange={this.handleChange}
              onBlur={this.validateFullName}
              placeholder="Enter your Fullname"
              id="fullname"
            />
            <br />
            <div>{this.state.errors.fullname}</div>
            <br />
          </div>
          {/* Email Input Field */}
          <div>
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              onBlur={this.validateEmail}
              placeholder="Enter your email"
              id="email"
            />
            <br />
            <div>{this.state.errors.email}</div>
            <br />
          </div>
          {/* Password Input Field */}
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              onBlur={this.validatePassword}
              placeholder="Enter Password"
              id="Password"
            />
            <br />
            <div>{this.state.errors.password}</div>
            <br />
          </div>
          {/* Submit Input */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewLogin;
