import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  clearAuthError,
  postLogin
} from "../../store/Auth/actions";

import {
  isAuthenticated,
  isFetchingAuth
} from "../../store/selectors";

import Login from "./presenter";

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state),
  }
}

function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      clearAuthError,
      postLogin
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);