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
   *  gamesList,
   * }
   */

  const games = props.gamesList.map( game => {
    return <Game
              key={game.gameName}
              imgUrl={game.imgUrl}
              gameName={game.gameName}
              gameLink={game.gameLink}
              playTime={(game.playTime.toFixed(2)/60).toFixed(1)}
            />;
  });

  return (
    <Card className={classes.card}>
      <CardContent>
        <div style={{display:"flex", alignItems:"left", flexDirection:"column"}}>
          <div key="friendDiv" style={{display:"flex", alignItems:"center", marginBottom:"0.5em"}}>
            <img alt="friend icon" src={props.imgUrl} height="40px" width="40px"></img>
            <h5 style={{marginLeft:"0.5em", paddingBottom:"0.5em"}}>{props.friendName}</h5>
          </div>
          <div key="gamesDiv" style={{marginLeft:"3em"}}>
            {props.gamesList && games}
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
