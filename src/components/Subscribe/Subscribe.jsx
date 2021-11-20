import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Text from '../shared/Text';
import Button from '../shared/Button';
import Select from '../shared/Select';
import Group from '../shared/Group';
import Checkbox from '../shared/Checkbox';
import LoadingPage from '../shared/LoadingPage';
import Image03 from '../../assets/images/image03.png';
import UserContext from '../../contexts/UserContext';
import flexify from '../../styles/utils/flexify';
import colorPicker from '../../styles/utils/colorPicker';
import text from '../../styles/utils/text';
import spacing from '../../styles/utils/spacing';

const Subscribe = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [plan, setPlan] = useState('');
  const [deliveryDay, setDeliveryDay] = useState('');

  const [checkboxes, setCheckboxes] = useState({
    tea: false,
    insenses: false,
    organics: false,
  });

  const handleChange = (prop) => () => {
    setCheckboxes((values) => ({ ...values, [prop]: !values[prop] }));
  };

  useEffect(() => {
    if (!plan) setDeliveryDay('');
  }, [plan]);

  if (user && user.unauthorized) {
    navigate('/');
  }

  return (user && !user.unauthorized) ? (
    <Container paddingX="normal">
      <Title>
        Bom te ver por aqui, @
        {user.name}
      </Title>
      <Text marginTop="large" variant="thin">
        “Agradecer é arte de atrair coisas boas”
      </Text>
      <Card>
        <Image src={Image03} alt="Plano semanal" />
        <Group paddingX="normal">
          <Select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            margin="small"
          >
            <option value=""> Plano </option>
            <option value="1"> Semanal </option>
            <option value="2"> Mensal </option>
          </Select>

          <Select value={deliveryDay} onChange={(e) => setDeliveryDay(e.target.value)}>
            <option value=""> Entrega </option>
            {(plan === '1') && (
              <>
                <option value="1"> Segunda </option>
                <option value="2"> Quarta </option>
                <option value="3"> Sexta </option>
              </>
            )}
            {(plan === '2') && (
              <>
                <option value="1"> Dia 01 </option>
                <option value="2"> Dia 10 </option>
                <option value="3"> Dia 20 </option>
              </>
            )}
          </Select>
          <Box>
            <span>Quero receber</span>
            <ContainerCheckboxes>
              <Checkbox
                isChecked={checkboxes.tea}
                onChange={handleChange('tea')}
              >
                Chás
              </Checkbox>

              <Checkbox
                isChecked={checkboxes.insenses}
                onChange={handleChange('insenses')}
              >
                Insensos
              </Checkbox>

              <Checkbox
                isChecked={checkboxes.organics}
                onChange={handleChange('organics')}
              >
                Produtos organicos
              </Checkbox>
            </ContainerCheckboxes>
          </Box>
        </Group>
      </Card>
      <Button marginTop="large" fontSize="large">
        Próximo
      </Button>
    </Container>
  ) : (
    <LoadingPage />
  );
};

const ContainerCheckboxes = styled(Group)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  padding-bottom: ${spacing('large')}

`;

const Card = styled.div`
  ${flexify({ justifyContent: 'space-between' })}
  width: 100%;
  max-width: 470px;
  height: 400px;
  background-color: #fff;
  border-radius: 25px;
  margin-top: 30px;
`;

const Image = styled.img`
  height: 172px;
  max-width: 100%;
  object-fit: fill;
`;

const Box = styled.div`
  background: ${colorPicker('primaryLighter')};
  ${text('primaryDark', 'bold')};
  margin-top: ${spacing('small')};
  margin-bottom: ${spacing('normal')};
  padding: ${`${spacing('small')} ${spacing('normal')}`};
  border-radius: 5px;
  height: 110px;
  width: 100%;
`;

export default Subscribe;
