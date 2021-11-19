import React from 'react';
import { Ellipsis } from 'react-spinners-css';
import Container from './Container';

const LoadingPage = () => (
  <Container>
    <Ellipsis color="white" />
  </Container>
);

export default LoadingPage;
