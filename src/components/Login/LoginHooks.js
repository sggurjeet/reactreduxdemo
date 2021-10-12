import React, { useState } from "react";
import "../Login/style.css";

const DEFAULT_DATAOBJ = {
  username: "",
  password: "",
};

function LoginHooks(props) {
  //Set Initial State
  const [dataObj, handleDataObj] = useState({ ...DEFAULT_DATAOBJ });

  const [errors, setError] = useState({});

  //Handle State Change
  const handleChange = (e) => {
    const { value, name } = e.target;
    handleDataObj((state) => ({
      ...state,
      [name]: value,
    }));
  };
  //Handle Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // const payload = {
    //   username: state.username,
    //   password: state.password,
    // };
    // console.log(payload);
    // alert(`${state.username} your Login is Succesfull`);
    if (validate()) {
      console.log(dataObj);
      const name = dataObj.username;

      handleDataObj({ ...DEFAULT_DATAOBJ });

      alert(`${name} your form is submitted`);
    }
  };

  //INDEPENDENT VALIDATION SO AS ONLY THE FIELD THAT HAS AN ERROR WILL THROW IT OTHERWISE
  //Independent Validation for Username
  function validateUserName() {
    let localError = "";

    let isValid = true;

    const re = /^\S*$/;

    if (!dataObj.username) {
      isValid = false;
      localError = "Please enter your username.";
    } else if (
      dataObj.username?.trim().length < 6 ||
      !re.test(dataObj.username)
    ) {
      isValid = false;
      localError = "Please enter valid username.";
    } else {
      localError = "";
    }

    setError((state) => ({
      ...state,
      username: localError,
    }));
    return isValid;
  }
  //Independent Validation for Password
  function validatePassword() {
    let localError = "";

    let isValid = true;

    if (!dataObj.password) {
      isValid = false;
      localError = "Please enter your password.";
    } else if (dataObj.password?.trim().length < 8) {
      isValid = false;
      localError = "Please add at least 8 charachter.";
    } else {
      localError = "";
    }

    setError((state) => ({
      ...state,
      password: localError,
    }));
    return isValid;
  }

  function validate() {
    let isValid = true;
    // let localError = "";
    //Username Validation
    isValid = validateUserName();
    //Password Validation
    isValid = validatePassword();

    // setError((state) => ({
    //   ...state,
    //   errors: localError,
    // }));
    return isValid;
  }
  return (
    <div>
      <h2>Sign In (Hooks)</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={dataObj.username}
              onChange={handleChange}
              onBlur={validateUserName}
              placeholder="Enter username"
            />
            <br />
            <div>{errors.username}</div>
            <br />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={dataObj.password}
              onChange={handleChange}
              onBlur={validatePassword}
              placeholder="Enter Password"
            />
            <br />
            <div>{errors.password}</div>
            <br />
          </div>

          <div>
            <input type="submit" name="submit" value="login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginHooks;
