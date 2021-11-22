import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Text from '../shared/Text';
import Group from '../shared/Group';
import Button from '../shared/Button';
import LoadingPage from '../shared/LoadingPage';
import Image03 from '../../assets/images/image03.png';
import UserContext from '../../contexts/UserContext';
import Card from '../shared/Card';

const Details = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (user && user.unauthorized) {
    navigate('/');
  }
  console.log(user);

  return (user && !user.unauthorized) ? (
    <Container paddingX="normal" paddingY="huge">
      <Title>
        Bom te ver por aqui,
        {' '}
        {user.name}
        .
      </Title>
      <Text marginTop="large" variant="thin">
        “Agradecer é arte de atrair coisas boas”
      </Text>
      <Card background="white">
        <Group flexProps={{ alignItems: 'flex-start' }}>
          <Image src={Image03} alt="Plano semanal" />
          <Group flexProps={{ alignItems: 'flex-start' }} paddingX="large">
            <Text variant="contrast" marginTop="large">
              Plano:
              {' '}
              <Text variant="pink" weight="bold">{user.plan}</Text>
            </Text>

            <Text variant="contrast" marginTop="small">
              Data da assinatura:
              {' '}
              <Text variant="pink" weight="bold">{user.subscriptionDate}</Text>
            </Text>

            <Text variant="contrast" marginTop="small">
              Próximas entregas:
            </Text>
            <Text variant="pink" weight="bold" paddingX="large">{user.nextDeliveries[0]}</Text>
            <Text variant="pink" weight="bold" paddingX="large">{user.nextDeliveries[1]}</Text>
            <Text variant="pink" weight="bold" paddingX="large">{user.nextDeliveries[2]}</Text>
          </Group>
        </Group>
        <Group flexProps={{ row: true }} marginBottom="large">
          <Text variant="pink" paddingX="large">Chás</Text>
          <Text variant="pink">Produtos organicos</Text>
          <Text variant="pink" paddingX="large">Incensos</Text>
        </Group>

      </Card>
      <Link to="/assinar">
        <Button
          fontSize="large"
          marginBottom="large"
        >
          Avaliar entregas
        </Button>
      </Link>
    </Container>
  ) : (
    <LoadingPage />
  );
};

const Image = styled.img`
  height: 172px;
  width: 100%;
`;

export default Details;
