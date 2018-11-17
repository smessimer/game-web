import { connect } from 'react-redux';
import { setLoggedIn, setUser } from '../../store/actions';
import Login from './presenter';

const mapStateToProps = state => ({
  loggedIn: state.auth,
})

const mapDispatchToProps = dispatch => ({
  setUser: (user) => {
    dispatch(setUser(user));
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