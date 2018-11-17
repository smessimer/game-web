import React, { Component } from "react";

import LoginCard from "./components/LoginCard";
import LoginHeader from "./components/LoginHeader";
import { postLogin } from "../../services/login";
import Wrapper from "./components/Wrapper";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      errorStatusCode: 0,
      isSubmitting: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    const newState = state;

    if (props.authError) {
      newState.error = props.authError;
    }
    return newState;
  }

  handleError = (err) => {
    alert("oops")
    this.setState({ error: err.message, isSubmitting: false });
    console.log(err);
  };

  handleSubmit = (email, password) => {
    const data = {
      email,
      password,
    };
    this.setState({ isSubmitting: true });

    postLogin(data.email, data.password)
      .then(res => {
        alert('Success')
        this.setState({ isSubmitting: false});
      })
      .catch(this.handleError);
  }

  render() {
    const { error, isSubmitting } = this.state;

    if (error) {
      return <h1>{error}</h1>;
    }

    return (
      <Wrapper>
        <LoginHeader />
        <br/> 
        <LoginCard
          handleSubmit={this.handleSubmit}
        />
      </Wrapper>
    );
  }
}
