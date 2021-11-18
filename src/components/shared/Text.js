import styled from 'styled-components';

const Text = styled.span`
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  margin-top: ${({ marginTop }) => marginTop || 0};
  padding: ${({ paddingX, paddingY }) => `${(paddingY || 0)} ${(paddingX || 0)}`};
  font-size: 18px;
`;

export default Text;
