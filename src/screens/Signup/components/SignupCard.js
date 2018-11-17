import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import SignupForm from "./SignupForm";

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 350,
    display: 'flex',
    direction: "column",
  },
  cardContent: {
    display: "flex",
    direction: "column",
    maxWidth: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SignupCard(props) {
  const { classes, handleSubmit } = props;

  return (
    <Card className = { classes.card }>
      <CardContent>
        <SignupForm handleSubmit={handleSubmit} />
      </CardContent>
    </Card>
  )
}

SignupCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupCard);