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

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
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
  ${fullWidthStyle}// 위 코드 밑에 위치해야 적용이 됨
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <ButtonStyled
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
}
ButtonStyled.defaultProps = {
  color: "blue",
  size: "medium",
};

export default Button;
