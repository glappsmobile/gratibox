import styled from 'styled-components';
import flexify from '../../styles/utils/flexify';
import spacing from '../../styles/utils/spacing';

const Group = styled.div`
  ${({ flexProps }) => (flexProps ? flexify(flexProps) : flexify())}
  margin-top: ${({ marginTop }) => spacing(marginTop)};
  margin-bottom: ${({ marginBottom }) => spacing(marginBottom)};
  width: 100%;
`;

export default Group;
