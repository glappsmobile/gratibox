import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import flexify from '../../styles/utils/flexify';
import EyeIcon from './EyeIcon';

const Input = ({
  placeholder, minLength, type, onChange, value, required, password, error,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  let inputType = type;
  if (password) {
    inputType = isVisible ? 'text' : 'password';
  }
  return (
    <InputGroup>
      <InputWrapper>
        <StyledInput
          placeholder={placeholder}
          minLength={minLength}
          type={inputType}
          onChange={onChange}
          value={value}
          required={required}
          error={error}
        />
        {password && (
          <EyeIcon isVisible={isVisible} setIsVisible={setIsVisible} />
        )}
      </InputWrapper>
      {error && (
        <HelperText>
          {error}
        </HelperText>
      )}
    </InputGroup>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  minLength: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  password: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  minLength: '',
  type: 'text',
  required: false,
  password: false,
  error: false,
};

const HelperText = styled.span`
  font-size: 14px;
  color: #df4759;
  margin-top: 5px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputGroup = styled.div`
  ${flexify({ alignItems: 'flex-start' })}
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 90vw;
  max-width: 500px;
  min-height: 64px;
  padding-left: 15px;
  background: #FFFFFF;
  border: ${({ error }) => (error ? '1px solid #df4759' : 'none')};
  color: ${({ error }) => (error ? '#df4759' : 'black')};
  border-radius: 10px;
  font-size: 24px;
  font-weight: 500;

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
