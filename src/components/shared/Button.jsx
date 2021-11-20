import React from 'react';
import styled from 'styled-components';
import { Ellipsis } from 'react-spinners-css';
import PropTypes from 'prop-types';
import flexify from '../../styles/utils/flexify';
import spacing from '../../styles/utils/spacing';

const Button = ({
  isLoading, variant, size, fontSize, marginTop, children,
}) => (
  <StyledButton
    isLoading={isLoading}
    variant={variant}
    size={size}
    disabled={isLoading}
    fontSize={fontSize}
    marginTop={marginTop}
  >
    {isLoading ? (
      <Ellipsis color="white" />
    ) : (
      children
    )}
  </StyledButton>
);

Button.propTypes = {
  isLoading: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]),
  fontSize: PropTypes.string,
  marginTop: PropTypes.string,
};

Button.defaultProps = {
  isLoading: false,
  variant: '',
  size: '',
  fontSize: '18px',
  marginTop: '0',
  children: '',
};

const StyledButton = styled.button`
  ${flexify()}
  border-radius: 10px;
  color: white;
  font-weight: bold;
  margin: 15px auto 0 auto;
  opacity: ${({ isLoading }) => (isLoading ? '0.5' : '1')};
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
  :hover {
    filter: brightness(1.1);
  }
  background: ${({ variant }) => {
    if (variant === 'text') {
      return 'none';
    }
    return '#8C97EA';
  }};
  min-width: ${({ size }) => {
    if (size === 'large') {
      return '237px';
    }
    return '200px';
  }};
  height: ${({ size }) => {
    if (size === 'large') {
      return '56px';
    }
    return '45px';
  }};
  font-size: ${({ size }) => {
    if (size === 'large') {
      return '36px';
    }
    return '18px';
  }};
  font-size: ${({ fontSize }) => (fontSize || '18px')};
  margin-top: ${({ marginTop }) => (spacing(marginTop) || '0')};
`;

export default Button;
