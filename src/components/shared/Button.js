import styled from 'styled-components';

const Button = styled.button`
  border-radius: 10px;
  color: white;
  font-weight: bold;
  margin: 15px auto 0 auto;
  cursor: pointer;

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
  min-height: ${({ size }) => {
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
