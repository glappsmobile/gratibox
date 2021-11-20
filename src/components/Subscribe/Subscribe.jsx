import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Text from '../shared/Text';
import Button from '../shared/Button';
import Select from '../shared/Select';
import Group from '../shared/Group';
import LoadingPage from '../shared/LoadingPage';
import Image03 from '../../assets/images/image03.png';
import UserContext from '../../contexts/UserContext';
import flexify from '../../styles/utils/flexify';

const Subscribe = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [plan, setPlan] = useState('');
  const [deliveryDay, setDeliveryDay] = useState('');

  useEffect(() => {
    if (!plan) setDeliveryDay('');
  }, [plan]);

  if (user && user.unauthorized) {
    navigate('/');
  }

  return (user && !user.unauthorized) ? (
    <Container paddingX="11px">
      <Title>
        Bom te ver por aqui, @
        {user.name}
      </Title>
      <Text marginTop="22px" fontWeight="300">
        “Agradecer é arte de atrair coisas boas”
      </Text>
      <Card>
        <Image src={Image03} alt="Plano semanal" />
        <Group>
          <Select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            margin="small"
          >
            <option value=""> Plano </option>
            <option value="1"> Semanal </option>
            <option value="2"> Mensal </option>
          </Select>

          <Select value={deliveryDay} onChange={(e) => setDeliveryDay(e.target.value)}>
            <option value=""> Entrega </option>
            {(plan === '1') && (
            <>
              <option value="1"> Segunda </option>
              <option value="2"> Quarta </option>
              <option value="3"> Sexta </option>
            </>
            )}
            {(plan === '2') && (
            <>
              <option value="1"> Dia 01 </option>
              <option value="2"> Dia 10 </option>
              <option value="3"> Dia 20 </option>
            </>
            )}
          </Select>
        </Group>

      </Card>
      <Button marginTop="12px" fontSize="24px">
        Próximo
      </Button>
    </Container>
  ) : (
    <LoadingPage />
  );
};

const Card = styled.div`
  ${flexify({
    justifyContent: 'space-between',
  })}
  width: 100%;
  max-width: 470px;
  height: 400px;
  background-color: #fff;
  border-radius: 25px;
  margin-top: 30px;
`;

const Image = styled.img`
  height: 200px;
  max-width: 100%;
  object-fit: fill;
`;

export default Subscribe;
