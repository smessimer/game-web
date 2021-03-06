import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Invalid from "./components/Invalid";
import LoginCard from "./components/LoginCard";
import LoginHeader from "./components/LoginHeader";
import { postLogin } from "../../services/login";
import { getUser } from '../../services/getUser';
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
    console.log('Error: ', err);
    this.setState({ error: err.error || 'Error on server', isSubmitting: false });
  };

  handleSubmit = (email, password) => {
    const data = {
      email,
      password,
    };
    this.setState({ isSubmitting: true });

    postLogin(data.email, data.password)
      .then(res => {
        return res;
      })
      .then(res => {
        return getUser(res.id);
      })
      .then(res => {
        this.props.setUser(res);
        this.setState({ isSubmitting: false });
        this.props.setLoggedIn(true);
      })
      .catch(this.handleError);
  }

  render() {
    const { error, isSubmitting } = this.state;

    if (this.props.auth) {
      return <Redirect to='/u/feed' />;
    }

    if (this.props.loggedIn) {
      return <Redirect to='/u/feed' />;
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
