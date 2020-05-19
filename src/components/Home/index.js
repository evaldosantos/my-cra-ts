import React from 'react';
import styled from 'styled-components';
import { ViewPort, Title } from '../../common';

const Container = styled(ViewPort)`
  background-color: black;
  color: white;
`;

const Home = () => (
  <Container>
    <Title>Home Page</Title>
  </Container>
);

export default Home;
