import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Text from '../shared/Text';
import LoadingPage from '../shared/LoadingPage';
import UserContext from '../../contexts/UserContext';
import PlanInfo from './PlanInfo';
import UserInfo from './UserInfo';

const Subscribe = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [plan, setPlan] = useState('');
  const [deliveryDay, setDeliveryDay] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  if (user && user.subscription.plan) {
    navigate('/detalhes');
  }

  const [formData, setFormData] = useState({
    tea: false,
    incense: false,
    organic: false,
    plan: '',
    deliveryDay: '',
    name: '',
    address: '',
    cep: '',
    city: '',
    state: '',
  });

  const handleCheckboxChange = (prop) => () => {
    setFormData((values) => ({ ...values, [prop]: !values[prop] }));
  };

  const handleInputChange = (prop) => (e) => {
    setFormData({ ...formData, [prop]: e.target.value });
  };

  useEffect(() => {
    if (!plan) setDeliveryDay('');
  }, [plan]);

  if (user && user.unauthorized) {
    navigate('/');
  }

  return (user && !user.unauthorized) ? (
    <Container>
      <Title marginX="small">
        Bom te ver por aqui,
        {' '}
        {user.name}
        .
      </Title>
      <Text marginTop="large" variant="thin" marginX="small">
        “Agradecer é arte de atrair coisas boas”
      </Text>
      <StyledCarousel
        showArrows={false}
        swipeable={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        selectedItem={currentPage}
      >
        <PlanInfo
          plan={plan}
          setPlan={setPlan}
          deliveryDay={deliveryDay}
          setDeliveryDay={setDeliveryDay}
          formData={formData}
          setCurrentPage={setCurrentPage}
          handleCheckboxChange={handleCheckboxChange}
          handleInputChange={handleInputChange}
        />

        <UserInfo
          plan={plan}
          setPlan={setPlan}
          deliveryDay={deliveryDay}
          setDeliveryDay={setDeliveryDay}
          formData={formData}
          setCurrentPage={setCurrentPage}
          handleCheckboxChange={handleCheckboxChange}
          handleInputChange={handleInputChange}
        />

      </StyledCarousel>
    </Container>
  ) : (
    <LoadingPage />
  );
};

const StyledCarousel = styled(Carousel)`
  max-width: 100vw;
`;

export default Subscribe;
