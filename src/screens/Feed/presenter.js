import React, { Component } from 'react';

import HalfWidth from './components/HalfWidth';
import Wrapper from './components/Wrapper';
import FriendCard from './components/Friend';

export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(props, state) {
    const newState = state;

    if (props.authError) {
      newState.error = props.authError;
    }
    return newState;
  }

  render() {
    return (
      <Wrapper>
        <HalfWidth>
          <p>Feed</p>
        </HalfWidth>
        <HalfWidth>
          <p>Activity</p>
          <FriendCard 
            imgUrl='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/82/8240b562db3cfe84c8ed30bddcf0fbd76b46cee5_full.jpg'
            friendName='MrMessy'
          />
          <FriendCard 
            imgUrl='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/82/8240b562db3cfe84c8ed30bddcf0fbd76b46cee5_full.jpg'
            friendName='MrsMessy'
          />
        </HalfWidth>
      </Wrapper>
    );
  }
}

