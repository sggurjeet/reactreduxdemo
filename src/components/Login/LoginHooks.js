import React, { useState } from "react";

function LoginHooks(props) {
  //Set Initial State
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: state.username,
      password: state.password,
    };
    console.log(payload);
  };
  return;
}

export default LoginHooks;
