import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core';

export default function GameCard(props) {
  const { classes } = props;
  /*
   * props = {
   *  imgUrl,
   *  gameName,
   *  gameLink,
   *  playTime,
   * }
   */

  return (
    <div style={{display:"flex", alignItems:"center", marginBottom:"0.5em"}}>
    <img alt="game icon" src={props.imgUrl} height="25px" width="25px"></img>
    <b style={{marginLeft:"0.5em"}}>{props.gameName}</b><div style={{marginLeft:"0.5em"}}>{props.playTime}</div>
    </div>
  );
}
