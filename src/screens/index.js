import React, { Component, Fragment } from "react";

import GlobalStyle from "../styles/reset";
import Login from "./Login";

export default class Root extends Component {

  render() {

    return (
      <Fragment>
        <GlobalStyle />
        <Login />
      </Fragment>
    );
  }
}