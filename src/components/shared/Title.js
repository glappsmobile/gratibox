import styled from 'styled-components';

const Title = styled.h1`
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  text-align: center;
  font-weight: 700;
  line-height: 33px;
  font-size: 26px;
`;

export default Title;
