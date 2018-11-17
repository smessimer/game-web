import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Invalid from "./components/Invalid";
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
      isSubmitting: false,
      loginError: false
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
    this.setState({ error: err.error, isSubmitting: false });
  };

  handleSubmit = (email, password) => {
    const data = {
      email,
      password,
    };
    this.setState({ isSubmitting: true });

    postLogin(data.email, data.password)
      .then(res => {
        this.setState({ isSubmitting: false });
        console.log('res: ', res);
        // Getting somewhwere! The 'res' is the user. Store this in redux.
        this.props.setUser(res);
        this.props.setLoggedIn(true);
      })
      .catch(this.handleError);
  }

  render() {
    const { error, isSubmitting } = this.state;

    if (this.props.auth) {
      console.log('this.props: ', this.props)
      return <Redirect to='/u/dashboard' />;
    }

    if (this.props.loggedIn) {
      console.log('logged in');
      return <Redirect to='/u/dashboard' />;
    }

    return (
      <Wrapper>
        <LoginHeader />
        {this.state.error && (
          <Invalid text={this.state.error}/>
        )}
        <br />
        <LoginCard
          handleSubmit={this.handleSubmit}
        />
        <p>Don't have an account? <Link to="/signup">Register</Link></p>
      </Wrapper>
    );
  }
}
