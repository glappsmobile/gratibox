import styled from 'styled-components';
import flexify from '../../styles/utils/flexify';
import spacing from '../../styles/utils/spacing';
import colorPicker from '../../styles/utils/colorPicker';

const Container = styled.div`
  ${({ flexProps }) => (flexProps ? flexify(flexProps) : flexify())}
  width: fit-content;
  min-height: 100vh;
  height: 100vh;
  margin: auto;
  margin-top: ${({ marginTop = 'auto' }) => spacing(marginTop)};
  background: ${({ background }) => (background ? colorPicker(background) : colorPicker('primary'))};
  padding: ${({ paddingX, paddingY }) => `${spacing(paddingY)} ${spacing(paddingX)}`};
`;

export default Container;
