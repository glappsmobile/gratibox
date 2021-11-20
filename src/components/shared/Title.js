import styled from 'styled-components';
import spacing from '../../styles/utils/spacing';

const Title = styled.h1`
  margin-top: ${({ marginTop }) => spacing(marginTop) || 0};
  margin-bottom: ${({ marginBottom }) => spacing(marginBottom) || 0};
  text-align: center;
  font-weight: 700;
  line-height: 33px;
  font-size: 26px;
`;

export default Title;
