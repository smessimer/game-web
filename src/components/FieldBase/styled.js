import styled, { css } from "styled-components";

import { color, fontSize } from "../../styles";

const fieldHeight = "38px";
const labelAreaHeight = "10px";

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 250px;
  padding-top: ${labelAreaHeight};
  border-bottom: 1px solid ${color.GREY_20};
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1) border-color;

  &:hover {
    border-color: ${color.GREY_40};
  }

  input,
  select,
  textarea,
  .braintree-field {
    background: transparent;
    appearance: none;
    border: 0;
    outline: 0;
    width: 100%;
    height: ${fieldHeight};
    font-size: inherit;
    font-family: inherit;
    font-weight: 400;
    padding: 0;
    margin: 0;
    opacity: 0;
    color: inherit;

    &[disabled] {
      color: ${color.GREY_60};
      cursor: not-allowed;
    }

    &::placeholder {
      color: transparent;
      transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1) color;
    }

    ${props =>
      ((props.isFocused && !props.isNativeSelect) ||
        props.hasValue ||
        !props.label) &&
      css`
        opacity: 1;

        &::placeholder {
          color: ${color.GREY_20};
        }
      `} ${props =>
      props.isNativeSelect &&
      css`
        padding-right: 30px;
      `};

    ${props =>
      props.readOnly &&
      css`
        color: ${color.GREY_60};
      `};
  }

  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 ${color.GREY_80};
  }

  ${props =>
    props.hasOnClick &&
    css`
      cursor: pointer;

      input,
      select,
      textarea,
      .braintree-field {
        cursor: pointer;
      }
    `} .braintree-field {
    opacity: 1;
  }

  textarea {
    height: auto;
    padding: 5px 0;
    line-height: 1.5;
    min-width: 100%;
  }

  ${props =>
    props.shouldFitContainer &&
    css`
      display: flex;
      width: 100%;
    `} ${props =>
    props.isNativeSelect &&
    css`
      svg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        pointer-events: none;
        transform: translateY(5px);
      }
    `};
`;

export const Label = styled.label`
  position: absolute;
  display: block;
  top: ${labelAreaHeight};
  left: 0;
  width: 100%;
  font-size: inherit;
  line-height: ${fieldHeight};
  font-weight: 400;
  color: ${color.GREY_50};
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1) transform,
    0.2s cubic-bezier(0.4, 0, 0.2, 1) line-height;
  pointer-events: none;
  transform-origin: top left;
  transform: scale(1) translateY(0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-backface-visibility: hidden;

  ${props =>
    (props.isFocused || props.hasValue) &&
    css`
      transform: scale(0.82) translateY(-26px);
    `} ${props =>
    props.isNativeSelect &&
    css`
      padding-right: 30px;
    `};
`;

export const FocusBorder = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${color.AUDI_BLACK};
  -webkit-backface-visibility: hidden;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1) transform;
  transform: scaleX(0);

  ${props =>
    props.isFocused &&
    css`
      transform: scaleX(1);
    `};
`;

export const Error = styled.div`
  font-size: ${fontSize.SMALL};
  font-weight: 400;
  color: ${color.AUDI_RED};
  margin-top: 6px;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1) height,
    0.2s cubic-bezier(0.4, 0, 0.2, 1) opacity;
  line-height: 16px;
  height: 0;
  opacity: 0;

  ${props =>
    props.hasError &&
    css`
      height: 16px;
      opacity: 1;
    `};
`;

export const Info = styled.div`
  font-size: ${fontSize.SMALL};
  font-weight: 400;
  color: ${color.GREY_40};
  margin-top: 6px;
`;
