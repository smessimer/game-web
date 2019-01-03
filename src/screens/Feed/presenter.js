import React, { Component } from 'react';
import getGames from '../../services/getGames';
import getFriendsAndStats from '../../services/getFriendsAndStats';
import getPosts from '../../services/getPosts';

import MainColumn from './components/MainColumn';
import SecColumn from './components/SecColumn';
import Wrapper from './components/Wrapper';
import FriendCard from './components/Friend';
import PostCard from './components/Post';
import NewPostCard from './components/NewPost';
import { createPost } from '../../services/createPost';


const friendCards = (friendsList) => {
  return friendsList.map(friend => {
    if (friend.playtime.playtime.total_count && friend.playtime.playtime.total_count > 0) {
      return <FriendCard
        key={friend.steamid}
        imgUrl={friend.avatar}
        friendName={friend.personaname}
        gamesList={friend.playtime.playtime.games.map(game => {
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
      created_at={post.created_at}
      updated_at={post.updated_at}
      username={post.steam_user.username}

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
    getPosts(this.props.userId)
      .then((result) => {
        this.setState({ gettingPosts: false, postsList: result})
      })

    getFriendsAndStats(this.props.steamUserId)
      .then((result) => {
        this.setState({ gettingGames: false, friendsList: result })
      })
  }

  static getDerivedStateFromProps(props, state) {
    const newState = state;

    if (props.authError) {
      newState.error = props.authError;
    }
    return newState;
  }

  handleNewPostSubmit = (text, mediaUrl) => {
    this.setState({ isSubmitting: true });

    createPost(text, mediaUrl, this.props.steamUserId)
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }


  render() {
    return (
      <Wrapper>
        <MainColumn>
          <NewPostCard handleSubmit={this.handleNewPostSubmit}></NewPostCard>
          { this.state && !this.state.gettingPosts && this.state.postsList && postCards(this.state.postsList) }
        </MainColumn>
        <SecColumn>
          { this.state && !this.state.gettingFriends && this.state.friendsList && friendCards(this.state.friendsList) }
        </SecColumn>
      </Wrapper>
    );
  }
}

