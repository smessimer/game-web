import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  padding-bottom: 6px;
`;

const Inner = styled.div`
  background: ${color.GREY_5};
  height: 100%;
  padding: %{props => props.padding | "60px"};
`;

export default class Card extends Component {
  render() {
    const { children, padding } = this.props;

    return (
      <Wrapper>
        <Inner padding={padding}>{children}</Inner>
      </Wrapper>
    );
  }
}