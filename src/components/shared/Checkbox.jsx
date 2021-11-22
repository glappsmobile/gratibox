import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BsCheckLg } from 'react-icons/bs';
import flexify from '../../styles/utils/flexify';
import spacing from '../../styles/utils/spacing';
import colorPicker from '../../styles/utils/colorPicker';

const Checkbox = ({
  isChecked, onChange, children,
}) => (
  <CheckBoxWrapper onClick={onChange}>
    <CheckboxButton
      isChecked={isChecked}
    >
      <CheckIcon />
    </CheckboxButton>
    <span>
      {children}
    </span>
  </CheckBoxWrapper>
);

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]),
};

Checkbox.defaultProps = {
  children: '',
};

const CheckboxButton = styled.div`
  ${flexify()}
  color: #fff;
  background: ${({ isChecked }) => (isChecked ? colorPicker('primary') : colorPicker('white'))};
  border: none;
  width: 20px;
  height: 20px;
  margin-right: ${spacing('small')};
  transition: 250ms;
`;

const CheckIcon = styled(BsCheckLg)`
  margin-top: 2px;
  padding-left: 1px;
  padding-right: 1px;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  cursor: pointer;
  & {
    span {
      margin-top: 2px;
    }
  }

`;

export default Checkbox;
