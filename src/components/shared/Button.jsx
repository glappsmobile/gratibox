import React from 'react';
import styled from 'styled-components';
import { Ellipsis } from 'react-spinners-css';
import PropTypes from 'prop-types';
import flexify from '../../styles/utils/flexify';

const Button = ({
  isLoading, variant, size, children,
}) => (
  <StyledButton
    isLoading={isLoading}
    variant={variant}
    size={size}
    disabled={isLoading}
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
};

Button.defaultProps = {
  isLoading: false,
  variant: '',
  size: '',
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
    if (size === 'big') {
      return '237px';
    }
    return '200px';
  }};
  height: ${({ size }) => {
    if (size === 'big') {
      return '56px';
    }
    return '45px';
  }};
  font-size: ${({ size }) => {
    if (size === 'big') {
      return '36px';
    }
    return '18px';
  }};
`;

export default Button;
