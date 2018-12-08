import Validator from 'validator';
import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import Center from "./Center";

const REPEAT_PASSWORD_TEXT = 'Repeat password';
const PASSWORD_ERROR_TEXT = 'Passwords must match';
const EMAIL_TEXT = 'Email';
const EMAIL_ERROR_TEXT = 'Must be valid email address';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formLabel: {
    width: 300,
  },
  textField: {
    marginBottom: '2em',
    width: 300,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
      passwordMatch: false,
      repeatPasswordLabel: REPEAT_PASSWORD_TEXT,
      eneblePasswordError: false,
      validEmail: false,
      enableEmailError: false,
      emailLabel: EMAIL_TEXT,
    };

  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleEmailChange = name => event => {
    const email = event.target.value;
    const validEmail = Validator.isEmail(email);
    const emailLabel = !validEmail && this.state.enableEmailError ?
      EMAIL_ERROR_TEXT : EMAIL_TEXT;

    this.setState({
      email,
      validEmail,
      emailLabel,
    });
  }

  handlePasswordChange = name => event => {
    const password = event.target.value;
    let passwordMatch = false;
    let repeatPasswordLabel = REPEAT_PASSWORD_TEXT;

    if (this.state['repeatPassword'] === password) {
      passwordMatch = true;
      repeatPasswordLabel = REPEAT_PASSWORD_TEXT;
    } else if (this.state.enablePasswordError) {
      repeatPasswordLabel = PASSWORD_ERROR_TEXT;
    }
    this.setState({
      [name]: password,
      passwordMatch,
      repeatPasswordLabel,
    });
  };


  handleRepeatChange = name => event => {
    const repeatPassword = event.target.value;
    let passwordMatch = false;
    let repeatPasswordLabel = REPEAT_PASSWORD_TEXT;

    if (this.state['password'] === repeatPassword) {
      passwordMatch = true;
      repeatPasswordLabel = REPEAT_PASSWORD_TEXT;
    } else if (this.state.enablePasswordError) {
      repeatPasswordLabel = PASSWORD_ERROR_TEXT;
    }
    this.setState({
      [name]: repeatPassword,
      passwordMatch,
      repeatPasswordLabel,
    });
  };


  render() {
    const { classes, handleSubmit } = this.props;

    const onSubmit = e => {
      e.preventDefault()

      if (!this.state.passwordMatch) {
        this.setState({
          enablePasswordError: true,
          repeatPasswordLabel: PASSWORD_ERROR_TEXT,
        });
        return;
      }
      if (!this.state.validEmail) {
        this.setState({
          enableEmailError: true,
          emailLabel: EMAIL_ERROR_TEXT,
        });
        return;
      }

      this.props.handleSubmit(this.state.email, this.state.password);
    };

    return (
      <form classname={classes.container} noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-email"
        label={this.state.emailLabel}
        className={classes.textField}
        value={this.state.email}
        onChange={this.handleEmailChange('email')}
        margin="normal"
        error={!this.state.validEmail && this.state.enableEmailError}
      />
      <br />
      <TextField
        id="standard-password"
        label="Password"
        type="password"
        className={classes.textField}
        value={this.state.password}
        onChange={this.handlePasswordChange('password')}
        margin="normal"
      />
      <TextField
        id="standard-password"
        label={this.state.repeatPasswordLabel}
        type="password"
        className={classes.textField}
        value={this.state.repeatPassword}
        onChange={this.handleRepeatChange('repeatPassword')}
        margin="normal"
        error={!this.state.passwordMatch && this.state.enablePasswordError}
      />
      <br />
      <Center>
        <Button
          type="submit"
        >
        Continue
        </Button>
      </Center>
      </form>
    );
  }
}

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupForm);
