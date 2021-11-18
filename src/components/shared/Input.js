import styled from 'styled-components';

const Input = styled.input`
  width: 90vw;
  max-width: 500px;
  min-height: 64px;
  padding-left: 15px;
  background: #FFFFFF;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;

  ::placeholder {
    color: #604848;
    opacity: 0.5; 
  }

  :-ms-input-placeholder { 
    color: #604848;
    opacity: 0.5;
  }

  ::-ms-input-placeholder { 
    color: #604848;
    opacity: 0.5;
  }
`;

export default Input;
