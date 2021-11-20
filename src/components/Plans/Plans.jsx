import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Text from '../shared/Text';
import Button from '../shared/Button';
import LoadingPage from '../shared/LoadingPage';
import Image04 from '../../assets/images/image04.png';
import Image02 from '../../assets/images/image02.png';
import UserContext from '../../contexts/UserContext';

const Plans = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (user && user.unauthorized) {
    navigate('/');
  }

  return (user && !user.unauthorized) ? (
    <Container paddingX="normal" paddingY="huge">
      <Title>
        Bom te ver por aqui, @
        {user.name}
      </Title>
      <Text marginTop="big" variant="thin">
        Você ainda não assinou um plano, que tal começar agora?
      </Text>
      <Card>
        <Image src={Image04} alt="Plano semanal" />
        <Text variant="contrast" paddingX="big" marginTop="big">
          Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.
        </Text>
        <Link to="/assinar">
          <Button marginTop="big" fontSize="24px">
            Assinar
          </Button>
        </Link>

      </Card>

      <Card>
        <Image src={Image02} alt="Plano mensal" />
        <Text variant="contrast" paddingX="big" marginTop="big">
          Você recebe um box por mês.
        </Text>
        <Text variant="contrast" paddingX="big" marginTop="big">
          Ideal para quem está começando agora.
        </Text>
        <Link to="/assinar">
          <Button marginTop="normal" fontSize="24px">
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
  width: 100%;
  max-width: 470px;
  height: 400px;
  background-color: #E5CDB3;
  border-radius: 25px;
  margin-top: 30px;
`;

const Image = styled.img`
  height: 219px;
  width: 100%;
`;

export default Plans;
