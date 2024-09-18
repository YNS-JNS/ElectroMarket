import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const VARIANTS = {
  // Primary Button Css:
  primary: css`
    background: linear-gradient(to top left, #1f2937, #64748b);
    color: white;

    &:hover {
      background: linear-gradient(to top left, #1e293b, #475569);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `,

  // Secondary Button Css:
  secondary: css`
    background: #d9dee4;
    color: #344767;

    &:hover {
      /* background: linear-gradient(to top left, #bdbdcf, #bcb1b1); */
      background: #c5cad0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `,

  // Ghost Button Css:
  ghost: css`
    background: transparent;
    color: black;
    border: 2px solid black;

    &:hover {
      background: #000;
      color: #fff;
      border: 2px solid #000;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `,

  // Black Button Css:
  black: css`
   background: #000;
   color: #fff;
   border: 2px solid #000;

   &:hover {
     background: #fff;
     color: #000;
     border: 2px solid #000;
     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   }
 `,

  // Success Button Css:
  success: css`
 background: #0F67B1;
 color: #fff;
 /* border: 2px solid #3FA2F6; */

 &:hover {
 background: #3FA2F6;
   color: #fff;
   /* border: 2px solid #000; */
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${(props) => props.$padding || '12px 25px'};
  margin: ${(props) => props.$margin || '8px 4px'};
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: ${(props) => props.$fontSize || '14px'};
  text-transform: uppercase;
  transition: all 0.2s;

  ${(props) => props.$variant && VARIANTS[props.$variant]}
  ${(props) => props.disabled && DISABLED}
`;

const CustomButton = ({ label, leftIcon: LeftIcon, rightIcon: RightIcon, onClick, variant = 'primary', disabled, fontSize, padding, margin, width, height }) => {
  return (
    <Container onClick={onClick} $variant={variant} disabled={disabled} $fontSize={fontSize} $padding={padding} $margin={margin} $width={width} $height={height}>
      {LeftIcon && <LeftIcon className="text-xl" />}
      {label && <span>{label}</span>}
      {RightIcon && <RightIcon className="text-xl" />}
    </Container>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  leftIcon: PropTypes.elementType,
  rightIcon: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'black', 'success']),
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

CustomButton.defaultProps = {
  onClick: null,
  leftIcon: null,
  rightIcon: null,
  variant: 'primary',
  disabled: false,
  fontSize: '14px',
  padding: '12px 25px',
  margin: '8px 4px',
  width: 'auto',
  height: 'auto',
};

export default CustomButton;
