import styled from 'styled-components';
import flexify from '../../styles/utils/flexify';
import spacing from '../../styles/utils/spacing';
import colorPicker from '../../styles/utils/colorPicker';

const Container = styled.div`
  ${({ flexProps }) => (flexProps ? flexify(flexProps) : flexify())}
  width: fit-content;
  min-height: 100vh;
  margin: auto;
  margin-top: ${({ marginTop }) => spacing(marginTop) || 0};
  background: ${({ background }) => (background ? colorPicker(background) : colorPicker('primary'))};
  padding: ${({ paddingX, paddingY }) => `${(spacing(paddingY) || 0)} ${(spacing(paddingX) || 0)}`};
`;

export default Container;
