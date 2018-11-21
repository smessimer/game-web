import React, { Component } from 'react';
import getGames from '../../services/getGames';

import HalfWidth from './components/HalfWidth';
import Wrapper from './components/Wrapper';
import FriendCard from './components/Friend';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.setState({ gettingGames: true });
  }

  componentDidMount() {
    getGames(this.props.userId)
      .then(result => {
        this.setState({ gettingGames: false, gamesList: result });
        console.log('result: ', result)
      })
      .catch(err => {
        this.setState({ gettingGames: false, gamesList: null });
        console.log('Error getting games: ', err);
      })
  }

  static getDerivedStateFromProps(props, state) {
    const newState = state;

    if (props.authError) {
      newState.error = props.authError;
    }
    return newState;
  }

  render() {
    console.log('this.gamesList: ', this.gamesList);
    return (
      <Wrapper>
        <HalfWidth>
          <p>Feed</p>
        </HalfWidth>
        <HalfWidth>
          <p>Activity</p>
          { this.state && this.state.gamesList &&
          <FriendCard 
            imgUrl='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/82/8240b562db3cfe84c8ed30bddcf0fbd76b46cee5_full.jpg'
            friendName='MrMessy'
            gamesList={this.state.gamesList}
          />
          }
        </HalfWidth>
      </Wrapper>
    );
  }
}

