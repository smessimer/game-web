import { connect } from 'react-redux';
import Feed from './presenter';

const mapStateToProps = state => ({
  steamUserId: state.user.steam_user.id,
  userId: state.user.id,
});

const FeedContainer = connect(
  mapStateToProps,
)(Feed);

export default FeedContainer;
