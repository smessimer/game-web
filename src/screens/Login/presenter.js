import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import LoginCard from "./components/LoginCard";
import { postLogin } from "../../services/login";
import Wrapper from "./components/Wrapper";
import Vertical from "./components/Vertical";

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

  submitEmail = (values) => {
    this.props.login(values.email, values.password);
  }

  handleError = (err) => {
    this.setState({ error: err.message, isSubmitting: false });
    console.log(err);
  };

  handleSubmit = (values, actions) => {
    this.setState({ isSubmitting: true });

    postLogin(values.email, values.password)
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
        <Vertical>
          <LoginCard />
        </Vertical>
      </Wrapper>
    );
  }
}
