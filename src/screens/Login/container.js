import { connect } from 'react-redux';
import { setLoggedIn, setUser, setSteamUser } from '../../store/actions';
import Login from './presenter';

const mapStateToProps = state => ({
  loggedIn: state.auth,
})

const mapDispatchToProps = dispatch => ({
  setUser: (user) => {
    dispatch(setUser(user));
    dispatch(setSteamUser(user.steam_user));
  },
  setLoggedIn: (isLoggedIn) => {
    dispatch(setLoggedIn(isLoggedIn));
  }
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps)
  (Login);

export default LoginContainer;