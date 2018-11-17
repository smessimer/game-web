import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import { color } from '../../../styles';

const styles = {
  root: {
    fontSize: 12,
    marginBottom: '0.5em',
    color: color.ERROR,
  }
};

const StyledFormLabel = withStyles(styles)(FormLabel);

export default function Invalid(props) {
  const { text } = props;
  return <StyledFormLabel>{text}</StyledFormLabel>
};