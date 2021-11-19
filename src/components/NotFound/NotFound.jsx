import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image05 from '../../assets/images/image05.png';
import Text from '../shared/Text';
import Title from '../shared/Title';
import Button from '../shared/Button';
import Container from '../shared/Container';
import flexify from '../../styles/utils/flexify';

const Home = () => (
  <Container
    background="#5064ac"
    flexProps={{ justifyContent: 'flex-top' }}
  >
    <BoxTop>
      <Title>
        Ooops!
      </Title>
      <Text fontWeight="300" marginTop="40px" paddingX="5px">
        Não encontramos a página que você estava procurando.
      </Text>
      <Image src={Image05} alt="Imagem de boas vindas" />
    </BoxTop>
    <BoxBottom>
      <Link to="/">
        <Button>
          Ir para home
        </Button>
      </Link>
    </BoxBottom>
  </Container>
);

const BoxTop = styled.div`
  ${flexify()}
  padding-top: 50px;
  text-align: center;
  background-color: #6d7ce4;
  width: 79vh;
  max-width: 100vw;
`;

const BoxBottom = styled.div`
  ${flexify()}
  margin-top: 20px;
`;

const Image = styled.img`
  max-width: 100vw;
  max-height: 64vh;
  min-height: 200px;
  height: 100%;
  object-fit: contain;
`;

export default Home;
