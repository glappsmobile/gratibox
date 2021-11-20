import { css } from 'styled-components/macro';
import colorPicker from './colorPicker';

const text = (color, weight, size) => css`
  color: ${colorPicker(color)};

  font-weight: ${() => {
    switch (weight) {
      case 'bold':
        return '700';
      default:
        return '400';
    }
  }};

  font-size: ${() => {
    switch (size) {
      case 'big':
        return '24px';
      default:
        return '18px';
    }
  }};
`;

export default text;
