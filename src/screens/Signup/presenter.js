import React, { Component } from "react";

import SignupCard from "./components/SignupCard";
import SignupHeader from "./components/SignupHeader";
import { postSignup } from "../../services/signup";
import Wrapper from "./components/Wrapper";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repeatPassword: "",
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

  handleSubmit = (email, password, repeatPassword) => {
    const data = {
      email,
      password,
    };
    this.setState({ isSubmitting: true });

    postSignup(data.email, data.password)
      .then(res => {
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
        <SignupHeader />
        <br/> 
        <SignupCard
          handleSubmit={this.handleSubmit}
        />
      </Wrapper>
    );
  }
}
