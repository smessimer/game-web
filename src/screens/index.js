import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import GlobalStyle from "../styles/reset";
import Login from './Login';
import Signup from './Signup';
import Feed from './Feed';

export default class Root extends Component {

  render() {

    return (
      <Fragment>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/u/feed" component={Feed} />
          <Redirect to="/login" />
        </Switch>      </Fragment>
    );
  }
}