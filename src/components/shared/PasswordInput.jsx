import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import absolute from '../../styles/utils/absolute';
import Input from './Input';

const EyeIcon = ({ isVisible, setIsVisible }) => (
  <IconContainer onClick={() => setIsVisible((state) => !state)}>
    {isVisible ? (
      <AiFillEyeInvisible title="Esconder senha" />
    ) : (
      <AiFillEye title="Mostrar senha" />
    )}
  </IconContainer>
);

EyeIcon.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

const PasswordInput = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <InputWrapper>
      <Input
        {...props}
        type={isVisible ? 'text' : 'password'}
      />
      <EyeIcon isVisible={isVisible} setIsVisible={setIsVisible} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
`;

const IconContainer = styled.div`
    ${absolute('0', '10px', '0', null)}
    margin: auto;
    color: #5064ac;
    font-size: 30px;
    height: fit-content;
    cursor: pointer;
`;

export default PasswordInput;
