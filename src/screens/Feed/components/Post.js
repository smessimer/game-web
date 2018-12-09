import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles, CardMedia } from '@material-ui/core';

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
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

function media(url, type) {
  return <CardMedia
    className={type}
    image={url}
    title={url}
  />
}

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
      <CardHeader title={props.username} variant="h6" />
      {/* {props.media_url && media(props.media_url, classes.media)} */}
      <CardMedia
    image={props.media_url}
    title={props.media_url}
  />
      <CardContent>
        {props.caption}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(PostCard);
