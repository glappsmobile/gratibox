import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Container from '../shared/Container';
import Group from '../shared/Group';
import Title from '../shared/Title';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Form from '../shared/Form';
import { signUp } from '../../services/gratibox.services';

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (prop) => (event) => {
    setErrors({ ...errors, [prop]: '' });
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const {
      name, email, password, confirmPassword,
    } = formData;

    if (password !== confirmPassword) {
      setErrors({
        password: 'As senhas não coincidem',
        confirmPassword: 'As senhas não coincidem',
      });
      return;
    }
    setIsLoading(true);
    signUp({ name, email, password })
      .then(() => {
        setIsLoading(false);
        Swal.fire({
          title: 'Sucesso',
          text: 'Cadastro realizado!',
          icon: 'success',
          confirmButtonColor: '#6d7ce4',
          confirmButtonText: 'Entrar',
        }).then(() => {
          navigate('/entrar');
        });
      })
      .catch((error) => {
        const { status } = error.response;
        setIsLoading(false);

        if (status === 409) {
          setErrors({
            email: 'E-mail já registrado ',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocorreu um erro ao realizar o seu cadastro',
          });
        }
      });
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
            error={errors.name}
            required
          />

          <Input
            placeholder="Email"
            type="email"
            onChange={handleChange('email')}
            value={formData.email}
            error={errors.email}
            required
          />

          <Input
            placeholder="Senha"
            minLength="6"
            type="password"
            onChange={handleChange('password')}
            value={formData.password}
            error={errors.password}
            required
            password
          />

          <Input
            placeholder="Confirmar senha"
            minLength="6"
            type="password"
            onChange={handleChange('confirmPassword')}
            value={formData.confirmPassword}
            error={errors.confirmPassword}
            required
            password
          />
        </Group>

        <Group marginTop="40px">
          <Button type="submit" size="large" isLoading={isLoading}>
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
