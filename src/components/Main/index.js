import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { identity } from '../../helpers';
import { ViewPort, Title, Subtitle, PrimaryButton } from '../../common';

const Container = styled(ViewPort)`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Main = ({ push }) => {
  const navigateToHome = () => push('/home');

  return (
    <Container>
      <Title>Imagine-a-company</Title>
      <Subtitle>Do whatever you want when you want to.</Subtitle>
      <PrimaryButton onClick={navigateToHome}>Get Started</PrimaryButton>
    </Container>
  );
};

Main.propTypes = {
  push: PropTypes.func,
};

Main.defaultProps = {
  push: identity,
};

const mapDispatchToProps = {
  push,
};

export default connect(undefined, mapDispatchToProps)(Main);
