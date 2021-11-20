import styled from 'styled-components';
import text from '../../styles/utils/text';
import Arrow from '../../assets/icons/arrow.png';
import colorPicker from '../../styles/utils/colorPicker';
import spacing from '../../styles/utils/spacing';

const Select = styled.select`
  border-radius: 5px;
  width: 100%;
  margin-bottom: ${({ margin }) => spacing(margin)};
  height: 44px;
  border: none;
  padding-left: ${spacing('normal')};
  ${text('primaryDark', 'bold')}
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: ${colorPicker('primaryLighter')} url(${Arrow}) no-repeat ;
  background-position: right;

  :focus {
    outline: none !important;
    border: 2px solid ${colorPicker('primaryDark')};
    box-shadow: 0 0 10px ${colorPicker('primaryDark')};
  }

  option {
    background: ${colorPicker('primaryLighter')} ;
  }
`;

export default Select;
