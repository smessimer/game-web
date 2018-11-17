import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

import SignupCard from './components/SignupCard';
import SignupHeader from './components/SignupHeader';
import { postSignup } from '../../services/signup';
import Wrapper from './components/Wrapper';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
      error: '',
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
    this.setState({ error: err.message, isSubmitting: false });
    console.log('handleError:', err);
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

    return (
      <Wrapper>
        <SignupHeader />
        <br/> 
        <SignupCard
          handleSubmit={this.handleSubmit}
        />
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </Wrapper>
    );
  }
}
