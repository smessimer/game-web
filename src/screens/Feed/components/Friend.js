import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core';

import Game from './Game';

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

function FriendCard(props) {
  const { classes } = props;
  /*
   * props = {
   *  imgUrl,
   *  friendName,
   *  friendLink,
   * }
   */

  return (
    <Card className={classes.card}>
      <CardContent>
        <div style={{display:"flex", alignItems:"left", flexDirection:"column"}}>
        <div style={{display:"flex", alignItems:"center", marginBottom:"0.5em"}}>
        <Avatar src={props.imgUrl}></Avatar>
        <h5 style={{marginLeft:"0.5em", paddingBottom:"0.5em"}}>{props.friendName}</h5>
        </div>
        <div style={{marginLeft:"3em"}}>
        <Game
            imgUrl='https://steamcdn-a.akamaihd.net/steam/apps/435150/header.jpg?t=1539352146'
            gameName='Divinity: Original Sin 2'
            gameLink='https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/'
            playTime='8.5h'
          />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

FriendCard.propTypes = {
  classes: PropTypes.object.isRequred,
};

export default withStyles(styles)(FriendCard);
