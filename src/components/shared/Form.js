import styled from 'styled-components';
import flexify from '../../styles/utils/flexify';
import spacing from '../../styles/utils/spacing';

const Form = styled.form`
  ${({ flexProps }) => (flexProps ? flexify(flexProps) : flexify())}
  margin-top: ${({ marginTop }) => spacing(marginTop) || 0};
  margin-bottom: ${({ marginBottom }) => spacing(marginBottom) || 0};
`;

export default Form;
