import styled from 'styled-components';
import spacing from '../../styles/utils/spacing';
import text from '../../styles/utils/text';

const Title = styled.h1`
  ${text('white', 'bold', '26px')}
  margin-top: ${({ marginTop }) => spacing(marginTop)};
  margin-bottom: ${({ marginBottom }) => spacing(marginBottom)};
  padding: ${({ paddingX, paddingY }) => `${spacing(paddingY)} ${spacing(paddingX)}`};
  text-align: center;
  line-height: 33px;
  width: ${({ marginX }) => `calc(100% - ${spacing(marginX)} - ${spacing(marginX)})`};
`;

export default Title;
