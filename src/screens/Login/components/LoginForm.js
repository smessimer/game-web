import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formLabel: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

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
    const { classes } = this.props;

    return (
      <form classname={classes.container} noValidate autoComplete="off">
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
      <Button>Continue</Button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
