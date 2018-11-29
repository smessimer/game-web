import React, { Component } from 'react';
import getGames from '../../services/getGames';
import getFriendsAndStats from '../../services/getFriendsAndStats';

import HalfWidth from './components/HalfWidth';
import Wrapper from './components/Wrapper';
import FriendCard from './components/Friend';

const friendCards = (friendsList) => {
  return friendsList.map(friend => {
    if (friend.playtime.total_count && friend.playtime.total_count > 0) {
      return <FriendCard
        key={friend.steamid}
        imgUrl={friend.avatar}
        friendName={friend.personaname}
        gamesList={friend.playtime.games.map(game => {
          return {
            imgUrl: `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`,
            gameName: game.name,
            gameLink: '#',
            playTime: game.playtime_2weeks,
          };
        })}
      />
    }
  })
}

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.setState({ gettingGames: true });
  }

  async componentDidMount() {
    let friendsList = {};
    try {
      friendsList = await getFriendsAndStats(this.props.steamUserId);
    } catch (err) {
      throw err;
    }

    // Map friends list to what we want to display
    this.setState({ gettingGames: false, friendsList: friendsList });

    // getGames(this.props.userId)
    //   .then(result => {
    //     this.setState({ gettingGames: false, gamesList: result });
    //     console.log('result: ', result)
    //   })
    //   .catch(err => {
    //     this.setState({ gettingGames: false, gamesList: null });
    //     console.log('Error getting games: ', err);
    //   })
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
          { this.state && this.state.friendsList && friendCards(this.state.friendsList) }
        </HalfWidth>
      </Wrapper>
    );
  }
}

