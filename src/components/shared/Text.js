import styled from 'styled-components';

const Text = styled.span`
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  margin-top: ${({ marginTop }) => marginTop || 0};
  padding: ${({ paddingX, paddingY }) => `${(paddingY || 0)} ${(paddingX || 0)}`};
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
