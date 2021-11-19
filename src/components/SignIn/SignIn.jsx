import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Container from '../shared/Container';
import Group from '../shared/Group';
import Title from '../shared/Title';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Form from '../shared/Form';
import { signIn } from '../../services/gratibox.services';
import UserContext from '../../contexts/UserContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setErrors({ ...errors, [prop]: '' });
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signIn(formData)
      .then((response) => {
        setIsLoading(false);
        localStorage.setItem('token', JSON.stringify(response.data.token));
        setUser({ ...response.data });
        navigate('/home');
      })
      .catch((error) => {
        const { status } = error.response;
        setIsLoading(false);

        if (status === 404) {
          setErrors({
            email: 'E-mail não cadastrado',
          });
        } else if (status === 401) {
          setErrors({
            password: 'Senha incorreta',
          });
        } else if (status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Dados preenchidos incorretamente',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocorreu um erro ao entrar no GratiBox, tente novamente mais tarde',
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
            placeholder="Email"
            type="email"
            onChange={handleChange('email')}
            value={formData.email}
            error={errors.email}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            minLength="6"
            onChange={handleChange('password')}
            value={formData.password}
            error={errors.password}
            required
            password
          />
        </Group>

        <Group marginTop="40px">
          <Button
            size="big"
            type="submit"
            isLoading={isLoading}
          >
            Entrar
          </Button>
          <Link to="/cadastro">
            <Button variant="text">
              Ainda não sou grato
            </Button>
          </Link>
        </Group>
      </Form>
    </Container>
  );
};

export default SignIn;
