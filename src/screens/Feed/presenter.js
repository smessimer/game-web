import React, { Component } from 'react';
import getGames from '../../services/getGames';
import getFriendsAndStats from '../../services/getFriendsAndStats';
import getPosts from '../../services/getPosts';

import HalfWidth from './components/HalfWidth';
import Wrapper from './components/Wrapper';
import FriendCard from './components/Friend';
import PostCard from './components/Post';

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

const postCards = (postsList) => {
  return postsList.map(post => {
    console.log('post: ', post)
    return <PostCard
      key={post.id}
      caption={post.caption}
      upvotes={post.upvotes}
      media_url={post.media_url}
      user_id={post.user_id}
      created_at={post.created_at}
      updated_at={post.updated_at}
    />
  })
}

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.setState({ gettingPosts: true, gettingGames: true });
  }

  async componentDidMount() {
    let friendsList = {};
    let postsList = {};
    try {
      postsList = await getPosts(this.props.userId)
      friendsList = await getFriendsAndStats(this.props.steamUserId);
    } catch (err) {
      throw err;
    }

    // Map friends list to what we want to display
    this.setState({ gettingGames: false, friendsList: friendsList, postsList: postsList });
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
          { this.state && this.state.postsList && postCards(this.state.postsList) }
        </HalfWidth>
        <HalfWidth>
          <p>Activity</p>
          { this.state && this.state.friendsList && friendCards(this.state.friendsList) }
        </HalfWidth>
      </Wrapper>
    );
  }
}

