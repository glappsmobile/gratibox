import styled from 'styled-components';
import flexify from '../../styles/utils/flexify';

const Container = styled.div`
  ${({ flexProps }) => (flexProps ? flexify(flexProps) : flexify())}
  width: fit-content;
  min-height: 100vh;
  margin: auto;
  margin-top: ${({ marginTop }) => marginTop || 0};
  background: ${({ background }) => background || 0};
  padding: ${({ paddingX, paddingY }) => `${(paddingY || 0)} ${(paddingX || 0)}`};
`;

export default Container;
