import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../shared/Container';
import Group from '../shared/Group';
import Title from '../shared/Title';
import Button from '../shared/Button';
import Input from '../shared/Input';

const SignIn = () => (
  <Container>
    <Group>
      <Title marginBottom="40px">
        Bem vindo ao GratiBox
      </Title>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
    </Group>

    <Group marginTop="40px">
      <Button size="big">
        Entrar
      </Button>
      <Link to="/cadastro">
        <Button variant="text">
          Ainda não sou grato
        </Button>
      </Link>
    </Group>

  </Container>
);

export default SignIn;