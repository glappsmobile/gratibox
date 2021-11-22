import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import Select from '../shared/Select';
import Input from '../shared/Input';
import Group from '../shared/Group';
import Card from '../shared/Card';
import Form from '../shared/Form';
import Image03 from '../../assets/images/image03.png';
import { subscribe, getUser } from '../../services/gratibox.services';
import UserContext from '../../contexts/UserContext';
import colorPicker from '../../styles/utils/colorPicker';

const UserInfo = ({
  formData, handleInputChange, setCurrentPage,
}) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const cepMask = (text) => text.replace(/\D/g, '').replace(/(\d{5})(\d{1,3})/, '$1-$2').substring(0, 9);
  const finishOrder = (e) => {
    e.preventDefault();
    setIsLoading(true);
    subscribe(formData, user.token)
      .then(() => {
        getUser(user.token)
          .then((response) => {
            setUser({
              ...response.data, token: user.token, unauthorized: false,
            });
            Swal.fire({
              title: 'Sucesso',
              text: 'Assinatura realizada com sucesso!',
              icon: 'success',
              confirmButtonColor: colorPicker('primary'),
              confirmButtonText: 'Ver detalhes',
            }).then(() => {
              navigate('/detalhes');
            });
          })
          .catch(() => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ocorreu um erro ao realizar sua assinatura',
              confirmButtonColor: colorPicker('primary'),
            });
          });
        setIsLoading(false);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocorreu um erro ao realizar sua assinatura',
          confirmButtonColor: colorPicker('primary'),
        });
        setIsLoading(false);
      });
  };
  return (
    <Form onSubmit={finishOrder}>
      <Card background="white" marginX="normal">
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
            value={cepMask(formData.cep)}
            onChange={handleInputChange('cep')}
            placeholder="CEP"
            background="primaryLighter"
            size="small"
            variant="strong"
            minLength="9"
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
        isLoading={isLoading}
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
