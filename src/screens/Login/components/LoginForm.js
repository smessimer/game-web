import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import Center from "./Center";

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

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, handleSubmit } = this.props;

    const onSubmit = e => {
      e.preventDefault()
      this.props.handleSubmit(this.state.email, this.state.password);
    };

    return (
      <form classname={classes.container} noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-email"
        label="Email"
        className={classes.textField}
        value={this.state.email}
        onChange={this.handleChange('email')}
        margin="normal"
      />
      <br />
      <TextField
        id="standard-password"
        label="Password"
        type="password"
        className={classes.textField}
        value={this.state.password}
        onChange={this.handleChange('password')}
        margin="normal"
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

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
