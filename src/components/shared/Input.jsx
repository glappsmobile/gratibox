import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EyeIcon from './EyeIcon';
import flexify from '../../styles/utils/flexify';
import colorPicker from '../../styles/utils/colorPicker';
import sizing from '../../styles/utils/sizing';
import text from '../../styles/utils/text';

const Input = ({
  placeholder, minLength, type, onChange, value, required,
  password, error, fullWidth, background, size, variant,
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
          background={background}
          fullWidth={fullWidth}
          size={size}
          variant={variant}
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
  fullWidth: PropTypes.bool,
  error: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  minLength: '',
  type: 'text',
  required: false,
  password: false,
  fullWidth: false,
  error: '',
  background: '',
  size: '',
  variant: '',
};

const HelperText = styled.span`
  font-size: 14px;
  color: #df4759;
  margin-top: 5px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputGroup = styled.div`
  ${flexify({ alignItems: 'flex-start' })}
  margin-bottom: 8px;
  width: 100%;
`;

const StyledInput = styled.input`
  max-width: 500px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '90vw')};
  border: ${({ error }) => (error ? `1px solid ${colorPicker('danger')}` : 'none')};
  color: ${({ error, color = 'black' }) => (error ? colorPicker('danger') : colorPicker(color))};
  background: ${({ background = 'white' }) => colorPicker(background)};
  min-height:${({ size = 'normal' }) => sizing(size)};
  padding-left: 15px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 400;

  ${({ variant }) => {
    if (variant === 'strong') {
      return text('primaryDark', 'bold', '18px');
    }
    return '';
  }}

  :focus {
    outline: none;
    border: 2px solid ${colorPicker('primaryDark')};
    box-shadow: 0 0 10px ${colorPicker('primaryDark')};
  }

  ::placeholder {
    color:  ${({ variant }) => ((variant === 'strong') ? colorPicker('primaryDark') : colorPicker('gray'))};
    opacity: ${({ variant }) => ((variant === 'strong') ? '1' : '0.5')};
  }

  :-ms-input-placeholder {
    color:  ${({ variant }) => ((variant === 'strong') ? colorPicker('primaryDark') : colorPicker('gray'))};
    opacity: ${({ variant }) => ((variant === 'strong') ? '1' : '0.5')};
  }

  ::-ms-input-placeholder {
    color:  ${({ variant }) => ((variant === 'strong') ? colorPicker('primaryDark') : colorPicker('gray'))};
    opacity: ${({ variant }) => ((variant === 'strong') ? '1' : '0.5')};
  }
`;

export default Input;
