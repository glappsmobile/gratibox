import React from 'react';
import styled from 'styled-components';
import { Ellipsis } from 'react-spinners-css';
import PropTypes from 'prop-types';
import flexify from '../../styles/utils/flexify';
import spacing from '../../styles/utils/spacing';
import colorPicker from '../../styles/utils/colorPicker';
import text from '../../styles/utils/text';

const Button = ({
  isLoading, variant, size, fontSize, marginTop, margin, children,
}) => (
  <StyledButton
    isLoading={isLoading}
    variant={variant}
    size={size}
    disabled={isLoading}
    fontSize={fontSize}
    marginTop={marginTop}
    margin={margin}
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
  margin: PropTypes.string,

};

Button.defaultProps = {
  isLoading: false,
  variant: '',
  size: '',
  fontSize: '18px',
  marginTop: '0',
  margin: '0',
  children: '',
};

const StyledButton = styled.button`
  ${flexify()}
  ${({ fontSize }) => text('white', 'bold', fontSize)}
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  opacity: ${({ isLoading }) => (isLoading ? '0.5' : '1')};
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
  :hover {
    filter: brightness(1.1);
  }
  background: ${({ variant }) => {
    if (variant === 'text') {
      return 'none';
    }
    return colorPicker('primaryLight');
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
  font-size: ${({ size, fontSize }) => {
    if (size === 'large') {
      return text('white', 'bold', 'huge');
    }
    return text('white', 'bold', fontSize);
  }};

  margin-bottom: ${({ margin, marginBottom }) => (margin ? spacing(margin) : spacing(marginBottom))};
  margin-top: ${({ marginTop }) => spacing(marginTop)};
`;

export default Button;
