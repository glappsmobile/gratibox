import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../shared/Container';
import Group from '../shared/Group';
import Title from '../shared/Title';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Form from '../shared/Form';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Group>
          <Title marginBottom="40px">
            Bem vindo ao GratiBox
          </Title>
          <Input
            placeholder="Nome"
            type="text"
            onChange={handleChange('name')}
            value={formData.name}
            required
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={handleChange('email')}
            value={formData.email}
            required
          />
          <Input
            placeholder="Senha"
            minLength="6"
            type="password"
            onChange={handleChange('password')}
            value={formData.password}
            required
          />
          <Input
            placeholder="Confirmar senha"
            minLength="6"
            type="password"
            onChange={handleChange('confirmPassword')}
            value={formData.confirmPassword}
            required
          />
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
      </Form>
    </Container>
  );
};

export default SignUp;
