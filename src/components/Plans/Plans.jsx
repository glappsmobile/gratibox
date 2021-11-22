import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Text from '../shared/Text';
import Button from '../shared/Button';
import Group from '../shared/Group';
import LoadingPage from '../shared/LoadingPage';
import Image04 from '../../assets/images/image04.png';
import Image02 from '../../assets/images/image02.png';
import UserContext from '../../contexts/UserContext';
import colorPicker from '../../styles/utils/colorPicker';
import flexify from '../../styles/utils/flexify';

const Plans = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (user && user.unauthorized) {
    navigate('/');
  }

  if (user && user.subscription.plan) {
    navigate('/detalhes');
  }

  return (user && !user.unauthorized) ? (
    <Container paddingX="normal" paddingY="huge">
      <Title>
        Bom te ver por aqui,
        {' '}
        {user.name}
        .
      </Title>
      <Text marginTop="large" variant="thin">
        Você ainda não assinou um plano, que tal começar agora?
      </Text>
      <Card>
        <Image src={Image04} alt="Plano semanal" />
        <Text variant="contrast" paddingX="large" marginTop="large">
          Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.
        </Text>
        <Link to="/assinar">
          <Button
            fontSize="large"
            margin="normal"
          >
            Assinar
          </Button>
        </Link>

      </Card>

      <Card>
        <Image src={Image02} alt="Plano mensal" />
        <Group flexProps={{ alignItems: 'flex-start' }}>
          <Text variant="contrast" paddingX="large" marginTop="large">
            Você recebe um box por mês.
          </Text>
          <Text variant="contrast" paddingX="large" marginTop="large">
            Ideal para quem está começando agora.
          </Text>
        </Group>
        <Link to="/assinar">
          <Button
            margin="normal"
            fontSize="large"
          >
            Assinar
          </Button>
        </Link>
      </Card>
    </Container>
  ) : (
    <LoadingPage />
  );
};

const Card = styled.div`
  ${flexify({ justifyContent: 'space-around' })}
  width: 100%;
  max-width: 400px;
  min-width: 250px;
  height: 400px;
  background-color: ${colorPicker('light')};
  border-radius: 25px;
  margin-top: 30px;
`;

const Image = styled.img`
  height: 219px;
  width: 100%;
  max-width: 350px;
`;

export default Plans;
