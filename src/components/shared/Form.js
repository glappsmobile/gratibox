import styled from 'styled-components';
import flexify from '../../styles/utils/flexify';
import spacing from '../../styles/utils/spacing';

const Form = styled.form`
  ${({ flexProps }) => (flexProps ? flexify(flexProps) : flexify())}
  margin-top: ${({ marginTop }) => spacing(marginTop)};
  margin-bottom: ${({ marginBottom }) => spacing(marginBottom)};
`;

export default Form;
