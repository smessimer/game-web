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
    <div style={{display:"flex", alignItems:"center"}}>
    <Avatar src={props.imgUrl}></Avatar>
    <b><a style={{marginLeft:"1em"}} href={props.gameLink} target="_blank">{props.gameName}</a></b><div style={{marginLeft:"0.5em"}}>{props.playTime}</div>
    </div>
  );
}
