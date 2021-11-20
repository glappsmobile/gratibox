import styled from 'styled-components';
import spacing from '../../styles/utils/spacing';
import text from '../../styles/utils/text';

const Title = styled.h1`
  ${text('white', 'bold', '26px')}
  margin-top: ${({ marginTop }) => spacing(marginTop) || 0};
  margin-bottom: ${({ marginBottom }) => spacing(marginBottom) || 0};
  text-align: center;
  line-height: 33px;
`;

export default Title;
