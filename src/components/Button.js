import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyled = css`
  ${({ theme, color }) => {
    const seleter = theme.palette[color];
    return css`
      background: ${seleter};
      &:hover {
        background: ${lighten(0.2, seleter)};
      }
      &:active {
        background: ${darken(0.2, seleter)};
      }
      ${(props) =>
        props.outline &&
        css`
          border: 1px solid ${seleter};
          background: none;
          color: ${seleter};
          &:hover {
            background: ${seleter};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};

const sizeStyled = css`
  ${({ size }) => css`
    font-size: ${sizes[size].fontSize};
    height: ${sizes[size].height};
  `};
`;

const ButtonStyled = styled.button`
  /* 공통 스타일 */
  display: inline-block;
  font-weight: bold;
  color: white;
  outline: none;
  border: none;
  border-radius: 4px;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;

  /* 크기 */
  ${sizeStyled}

  /* 색상 */
  ${colorStyled}

  /* 기타 */
    & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, size, outline, ...rest }) {
  return (
    <ButtonStyled color={color} size={size} outline={outline} {...rest}>
      {children}
    </ButtonStyled>
  );
}
ButtonStyled.defaultProps = {
  color: "blue",
  size: "medium",
};

export default Button;
