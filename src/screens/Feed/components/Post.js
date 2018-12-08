import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core';

const styles = {
  card: {
    minWidth: 275,
    marginBottom: '1em',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function PostCard(props) {
  const { classes } = props;

  /*
   * props = {
   *   caption,
   *   upvotes,
   *   media_url,
   *   user_id,
   *   created_at,
   *   updated_at,
   *   avatar_url, //TODO
   * }
   */

  return (
    <Card className={classes.card}>
      <CardHeader title={props.user_id}>
        {props.user_id}
      </CardHeader>
      <CardContent>
        {props.caption}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(PostCard);
