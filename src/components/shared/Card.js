import styled from 'styled-components';
import flexify from '../../styles/utils/flexify';
import spacing from '../../styles/utils/spacing';
import colorPicker from '../../styles/utils/colorPicker';

const Card = styled.div`
  ${({ flexProps }) => (flexProps ? flexify(flexProps) : flexify({ justifyContent: 'space-between' }))}
  background: ${({ background }) => (background ? colorPicker(background) : 'transparent')};
  margin-top: ${({ marginTop = 'large' }) => spacing(marginTop)};
  margin-bottom: ${({ marginBottom }) => spacing(marginBottom)};
  padding: ${({ paddingX, paddingY }) => `${spacing(paddingY)} ${spacing(paddingX)}`};
  border-radius: 25px;
  margin-right: auto;
  margin-left: auto;
  width: ${({ marginX = '0' }) => `calc(100% - ${spacing(marginX)} - ${spacing(marginX)})`};
  height: 400px;
  max-width: 400px;
`;

export default Card;
