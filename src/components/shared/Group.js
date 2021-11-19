import styled from 'styled-components';
import flexify from '../../styles/utils/flexify';

const Group = styled.div`
  ${({ flexProps }) => (flexProps ? flexify(flexProps) : flexify())}
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
`;

export default Group;
