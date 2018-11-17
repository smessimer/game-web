import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import FormLabel from "@material-ui/core/FormLabel";

const styles = {
  root: {
    fontSize: 24,
    marginBottom: '1em',
  }
};


const StyledFormLabel = withStyles(styles)(FormLabel);

export default function SignupHeader() {
  return <StyledFormLabel>Sign Up For SteamTracker</StyledFormLabel>
};