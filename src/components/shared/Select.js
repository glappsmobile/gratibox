import styled from 'styled-components';
import text from '../../styles/utils/text';
import Arrow from '../../assets/icons/arrow.png';

const Select = styled.select`
  border-radius: 5px;
  width: calc(100% - 40px);
  margin-bottom: 20px;
  height: 44px;
  border: none;
  padding-left: 5px;
  ${text('primaryDark', 'bold')}
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: rgba(224, 209, 237, 0.62) url(${Arrow}) no-repeat ;
  background-position: right;

  :focus {
    outline: none !important;
    border: 2px solid #6d7ce4;
    box-shadow: 0 0 10px #719ECE;
  }
`;

export default Select;
