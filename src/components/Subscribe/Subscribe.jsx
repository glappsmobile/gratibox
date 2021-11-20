import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Text from '../shared/Text';
import Button from '../shared/Button';
import Select from '../shared/Select';
import LoadingPage from '../shared/LoadingPage';
import Image03 from '../../assets/images/image03.png';
import UserContext from '../../contexts/UserContext';
import flexify from '../../styles/utils/flexify';

const Subscribe = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (user && user.unauthorized) {
    navigate('/');
  }

  return (user && !user.unauthorized) ? (
    <Container paddingX="11px">
      <Title>
        Bom te ver por aqui, @
        {user.name}
      </Title>
      <Text marginTop="22px" fontWeight="300">
        “Agradecer é arte de atrair coisas boas”
      </Text>
      <Card>
        <Image src={Image03} alt="Plano semanal" />
        <Select>
          <option value="1"> Planos </option>
        </Select>
      </Card>
      <Button marginTop="12px" fontSize="24px">
        Próximo
      </Button>
    </Container>
  ) : (
    <LoadingPage />
  );
};

const Card = styled.div`
  ${flexify({
    justifyContent: 'space-between',
  })}
  width: 100%;
  max-width: 470px;
  height: 400px;
  background-color: #fff;
  border-radius: 25px;
  margin-top: 30px;
`;

const Image = styled.img`
  height: 200px;
  max-width: 100%;
  object-fit: fill;
`;

export default Subscribe;
