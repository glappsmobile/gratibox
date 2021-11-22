import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../shared/Button';
import Select from '../shared/Select';
import Input from '../shared/Input';
import Group from '../shared/Group';
import Card from '../shared/Card';
import Form from '../shared/Form';
import Image03 from '../../assets/images/image03.png';
import { subscribe } from '../../services/gratibox.services';
import UserContext from '../../contexts/UserContext';

const UserInfo = ({
  formData, handleInputChange, setCurrentPage,
}) => {
  const { user } = useContext(UserContext);
  const finishOrder = (e) => {
    e.preventDefault();
    subscribe(formData, user.token)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <Form onSubmit={finishOrder}>
      <Card background="white">
        <Image src={Image03} alt="Plano semanal" />
        <Group paddingX="normal">
          <Input
            value={formData.name}
            onChange={handleInputChange('name')}
            placeholder="Nome completo"
            background="primaryLighter"
            size="small"
            variant="strong"
            fullWidth
            required
          />

          <Input
            value={formData.address}
            onChange={handleInputChange('address')}
            placeholder="Endereco de entrega"
            background="primaryLighter"
            size="small"
            variant="strong"
            fullWidth
            required
          />

          <Input
            value={formData.cep}
            onChange={handleInputChange('cep')}
            placeholder="CEP"
            background="primaryLighter"
            size="small"
            variant="strong"
            fullWidth
            required
          />
          <Group flexProps={{ row: true }}>
            <Input
              value={formData.city}
              onChange={handleInputChange('city')}
              placeholder="Cidade"
              background="primaryLighter"
              size="small"
              variant="strong"
              fullWidth
              required
            />

            <Select
              value={formData.state}
              onChange={handleInputChange('state')}
              width="150px"
              marginLeft="normal"
              margin="small"
              required
            >
              <option value=""> Estado </option>
              <option value={1}>AC</option>
              <option value={2}>AL</option>
              <option value={3}>AM</option>
              <option value={4}>AP</option>
              <option value={5}>BA</option>
              <option value={6}>CE</option>
              <option value={7}>DF</option>
              <option value={8}>ES</option>
              <option value={9}>GO</option>
              <option value={10}>MA</option>
              <option value={11}>MG</option>
              <option value={12}>MS</option>
              <option value={13}>MT</option>
              <option value={14}>PA</option>
              <option value={15}>PB</option>
              <option value={16}>PE</option>
              <option value={17}>PI</option>
              <option value={18}>PR</option>
              <option value={19}>RJ</option>
              <option value={20}>RN</option>
              <option value={23}>RS</option>
              <option value={21}>RO</option>
              <option value={22}>RR</option>
              <option value={24}>SC</option>
              <option value={25}>SE</option>
              <option value={26}>SP</option>
              <option value={27}>TO</option>
            </Select>
          </Group>
        </Group>
      </Card>
      <Button
        marginTop="large"
        fontSize="large"
        type="submit"
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
    </Form>
  );
};

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
