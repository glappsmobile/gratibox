import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../shared/Container';
import Group from '../shared/Group';
import Title from '../shared/Title';
import Button from '../shared/Button';
import Input from '../shared/Input';

const SignUp = () => (
  <Container>
    <Group>
      <Title marginBottom="40px">
        Bem vindo ao GratiBox
      </Title>
      <Input placeholder="Nome" />
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <Input placeholder="Confirmar senha" />
    </Group>

    <Group marginTop="40px">
      <Button size="big">
        Cadastrar
      </Button>

      <Link to="/entrar">
        <Button variant="text">
          Já sou grato
        </Button>
      </Link>
    </Group>

  </Container>
);

export default SignUp;
