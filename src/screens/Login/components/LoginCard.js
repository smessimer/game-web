import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import LoginForm from "./LoginForm";

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 500,
    display: 'flex',
    direction: "column",
  },
  cardContent: {
    display: "flex",
    direction: "column",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function LoginCard(props) {
  const { classes, handleSubmit } = props;

  return (
    <Card className = { classes.card }>
      <CardContent>
        <LoginForm handleSubmit={handleSubmit} />
      </CardContent>
    </Card>
  )
}

LoginCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginCard);