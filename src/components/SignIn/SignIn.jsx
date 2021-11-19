import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../shared/Container';
import Group from '../shared/Group';
import Title from '../shared/Title';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Form from '../shared/Form';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      <Group>
        <Title marginBottom="40px">
          Bem vindo ao GratiBox
        </Title>
        <Form id="form" onSubmit={handleFormSubmit}>
          <Input
            placeholder="Email"
            type="email"
            onChange={handleChange('email')}
            value={formData.email}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={handleChange('password')}
            value={formData.password}
            required
            password
          />
        </Form>
      </Group>

      <Group marginTop="40px">
        <Button size="big" type="submit" form="form">
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
};

export default SignIn;
