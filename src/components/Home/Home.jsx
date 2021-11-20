import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image05 from '../../assets/images/image05.png';
import Text from '../shared/Text';
import Title from '../shared/Title';
import Button from '../shared/Button';
import Container from '../shared/Container';
import flexify from '../../styles/utils/flexify';
import colorPicker from '../../styles/utils/colorPicker';

const Home = () => (
  <Container
    background="primaryDark"
    flexProps={{ justifyContent: 'flex-top' }}
  >
    <BoxTop>
      <Title>
        Bem vindo ao GratiBox
      </Title>
      <Text
        variant="thin"
        marginTop="huge"
        paddingX="small"
      >
        Receba em casa um box com chás, produtos organicos, incensos e muito mais...
      </Text>
      <Image src={Image05} alt="Imagem de boas vindas" />
    </BoxTop>
    <BoxBottom>
      <Link to="/cadastro">
        <Button>
          Quero começar
        </Button>
      </Link>

      <Link to="/entrar">
        <Button variant="text">
          Já sou grato
        </Button>
      </Link>

    </BoxBottom>
  </Container>
);

const BoxTop = styled.div`
  ${flexify()}
  padding-top: 50px;
  text-align: center;
  background-color: ${colorPicker('primary')};
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
