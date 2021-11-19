import React from 'react';
import styled from 'styled-components';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Text from '../shared/Text';
import Button from '../shared/Button';
import Image04 from '../../assets/images/image04.png';
import Image02 from '../../assets/images/image02.png';

const Plans = () => {
  const user = {
    name: 'Glauco Villas Boas',
  };

  return user ? (
    <Container paddingX="11px" paddingY="60px">
      <Title>
        Bom te ver por aqui, @
        {user.name}
        .
      </Title>
      <Text marginTop="22px" fontWeight="300">
        Você ainda não assinou um plano, que tal começar agora?
      </Text>
      <Card>
        <Image src={Image04} alt="imagem" />
        <Text variant="contrast" paddingX="20px" marginTop="21px">
          Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.
        </Text>
        <Button marginTop="34px" fontSize="24px">
          Assinar
        </Button>
      </Card>

      <Card>
        <Image src={Image02} alt="imagem" />
        <Text variant="contrast" paddingX="20px" marginTop="21px">
          Você recebe um box por mês.
        </Text>
        <Text variant="contrast" paddingX="20px" marginTop="17px">
          Ideal para quem está começando agora.
        </Text>
        <Button marginTop="20px" fontSize="24px">
          Assinar
        </Button>
      </Card>
    </Container>
  ) : (
    <Container />
  );
};

const Card = styled.div`
  width: 100%;
  max-width: 470px;
  height: 400px;
  background-color: #E5CDB3;
  border-radius: 25px;
  margin-top: 40px;
`;

const Image = styled.img`
  height: 219px;
  width: 100%;
`;

export default Plans;
