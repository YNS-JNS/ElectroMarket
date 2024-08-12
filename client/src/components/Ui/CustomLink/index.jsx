import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const VARIANTS = {
    primary: css`
    background: linear-gradient(to top left, #1f2937, #64748b);
    color: white;

    &:hover {
      background: linear-gradient(to top left, #1e293b, #475569);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-decoration: none;
    }
  `,
    secondary: css`
    background: #d9dee4;
    color: #344767;

    &:hover {
      background: #c5cad0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-decoration: none;
    }
  `,
    ghost: css`
    background: transparent;
    color: black;
    border: 2px solid black;

    &:hover {
      background: #000;
      color: #fff;
      border: 2px solid #000;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-decoration: none;
    }
  `,
    black: css`
    background: #000;
    color: #fff;
    border: 2px solid #000;

    &:hover {
      background: #fff;
      color: #000;
      border: 2px solid #000;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-decoration: none;
    }
  `,
    success: css`
    background: #0F67B1;
    color: #fff;

    &:hover {
    background: #3FA2F6;
      color: #fff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-decoration: none;
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;

  &:hover {
    background: #d4d4d4;
    color: #f5f5f5;
    box-shadow: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 25px;
  margin: 8px 4px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.2s;
  text-decoration: none;

  ${(props) => props.variant && VARIANTS[props.variant]}
  ${(props) => props.disabled && DISABLED}
`;

const CustomLink = ({ label, leftIcon: LeftIcon, rightIcon: RightIcon, to, variant = 'primary', disabled }) => {
    return (
        <StyledLink to={to} variant={variant} disabled={disabled}>
            {LeftIcon && <LeftIcon className="text-xl" />}
            <span>{label}</span>
            {RightIcon && <RightIcon className="text-xl" />}
        </StyledLink>
    );
};

CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    leftIcon: PropTypes.elementType,
    rightIcon: PropTypes.elementType,
    variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'black', 'success']),
    disabled: PropTypes.bool,
};

CustomLink.defaultProps = {
    leftIcon: null,
    rightIcon: null,
    variant: 'primary',
    disabled: false,
};

export default CustomLink;
