import styled from 'styled-components';
import spacing from '../../styles/utils/spacing';

const Text = styled.span`
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  margin-top: ${({ marginTop }) => spacing(marginTop) || 0};
  padding: ${({ paddingX, paddingY }) => `${(spacing(paddingY) || 0)} ${(spacing(paddingX) || 0)}`};
  font-size: 18px;
  line-height: 21px;

  display: inline-block;
  ${({ variant }) => {
    if (variant === 'contrast') {
      return `
        color: #4D65A8;
        font-weight: 700;
      `;
    }
    return '';
  }}
`;

export default Text;
