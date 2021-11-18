import React from 'react';
import styled from 'styled-components';
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
        Bem vindo ao GratiBox
      </Title>
      <Text fontWeight="300" marginTop="40px" paddingX="5px">
        Receba em casa um box com chás, produtos organicos, incensos e muito mais...
      </Text>
      <Image src={Image05} alt="imagem" />
    </BoxTop>
    <BoxBottom>
      <Button>Quero começar</Button>
      <Button variant="text">Já sou grato</Button>
    </BoxBottom>
  </Container>
);

const BoxTop = styled.div`
  ${flexify()}
  padding-top: 50px;
  text-align: center;
  background-color: #6d7ce4;
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
