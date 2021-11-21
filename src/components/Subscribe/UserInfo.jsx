/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../shared/Button';
import Select from '../shared/Select';
import Input from '../shared/Input';
import Group from '../shared/Group';
import Card from '../shared/Card';
import Image03 from '../../assets/images/image03.png';

const UserInfo = ({
  formData, handleInputChange, setCurrentPage,
}) => (
  <div>
    <Card background="white">
      <Image src={Image03} alt="Plano semanal" />
      <Group paddingX="normal">
        <Input
          value={formData.name}
          onChange={handleInputChange('name')}
          background="primaryLighter"
          size="small"
          variant="strong"
          fullWidth
        />
        <Select
          value={formData.plan}
          onChange={handleInputChange('plan')}
          margin="small"
        >
          <option value=""> Plano </option>
          <option value="1"> Semanal </option>
          <option value="2"> Mensal </option>
        </Select>

      </Group>
    </Card>
    <Button
      marginTop="large"
      fontSize="large"
      onClick={() => setCurrentPage(0)}
    >
      Finalizar
    </Button>

    <Button
      marginTop="small"
      fontSize="large"
      variant="text"
      onClick={() => setCurrentPage(0)}
    >
      Anterior
    </Button>
  </div>
);

UserInfo.propTypes = {
  formData: PropTypes.objectOf(PropTypes.any).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

const Image = styled.img`
  height: 172px;
  max-width: 100%;
  object-fit: fill;
`;

export default UserInfo;
