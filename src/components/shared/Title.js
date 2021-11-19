import styled from 'styled-components';

const Title = styled.h1`
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
`;

export default Title;
