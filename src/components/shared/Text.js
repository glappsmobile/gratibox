import styled from 'styled-components';
import spacing from '../../styles/utils/spacing';
import text from '../../styles/utils/text';

const Text = styled.span`
  margin-top: ${({ marginTop }) => spacing(marginTop) || 0};
  padding: ${({ paddingX, paddingY }) => `${spacing(paddingY)} ${spacing(paddingX)}`};
  font-size: 18px;
  line-height: 21px;

  display: inline-block;
  ${({ variant }) => {
    if (variant === 'contrast') {
      return text('primary', 'bold');
    }

    if (variant === 'thin') {
      return text('white', 'thin');
    }
    return '';
  }}
`;

export default Text;
