import styled from "styled-components";

import colors from "../constants/colors";

const sizeMatcher = (size = "medium") => {
  switch (size) {
    case "small":
      return `padding: 4px 8px;`;
    case "large":
      return `padding: 12px 28px;`;
    case "medium":
    default:
      return `padding: 8px 16px;`;
  }
};

const variantMatcher = variant => {
  switch (variant) {
    case "blue":
      return colors.blue;
    case "navy":
      return colors.navy;
    case "green":
      return colors.green;
    case "dark-green":
      return colors.darkGreen;
    case "red":
      return colors.red;
    case "orange":
      return colors.orange;
    case "yellow":
      return colors.yellow;
    case "gray":
      return colors.gray;
    case "black":
    default:
      return colors.black;
  }
};

const colorMatcher = (variant, ghost = false) => {
  if (ghost) {
    switch (variant) {
      case "blue":
        return colors.blue;
      case "navy":
        return colors.navy;
      case "green":
        return colors.green;
      case "dark-green":
        return colors.darkGreen;
      case "red":
        return colors.red;
      case "orange":
        return colors.orange;
      case "yellow":
        return colors.yellow;
      case "gray":
        return colors.gray;
      case "black":
      default:
        return colors.black;
    }
  } else {
    switch (variant) {
      case "yellow":
      case "gray":
        return colors.black;
      case "blue":
      case "navy":
      case "green":
      case "dark-green":
      case "red":
      case "orange":
      case "black":
      default:
        return colors.white;
    }
  }
};

const borderMatcher = variant => {
  switch (variant) {
    case "blue":
      return `1.2px solid ${colors.blue}`;
    case "navy":
      return `1.2px solid ${colors.navy}`;
    case "green":
      return `1.2px solid ${colors.green}`;
    case "dark-green":
      return `1.2px solid ${colors.darkGreen}`;
    case "red":
      return `1.2px solid ${colors.red}`;
    case "orange":
      return `1.2px solid ${colors.orange}`;
    case "yellow":
      return `1.2px solid ${colors.yellow}`;
    case "gray":
      return `1.2px solid ${colors.gray}`;
    case "black":
    default:
      return `1.2px solid ${colors.black}`;
  }
};

const Button = styled.button`
  margin: 4px;

  background-color: ${props =>
    props.ghost ? "transparent" : variantMatcher(props.variant)};
  border-radius: ${props => (props.rounded ? `20px` : `3px`)};
  border: ${props => borderMatcher(props.variant)};

  font-size: 12px;
  color: ${props => colorMatcher(props.variant, props.ghost)};

  outline: none;

  ${props => sizeMatcher(props.size)};
  ${props => (props.block ? `width: 100%;` : undefined)}

  &:active {
    background: ${props =>
      props.disabled || props.ghost
        ? undefined
        : variantMatcher(props.variant)};
    opacity: 0.5;
  }

  &:disabled {
    background: #6c8a9b;
    border: 1.2px solid #6c8a9b;

    color: #e6e6e4;
  }
`;

export default Button;
