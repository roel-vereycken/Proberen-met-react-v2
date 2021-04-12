import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';
import RegisterForm from './components/RegisterForm';
import OverzichtGrid from './components/OverzichtGrid';
import PasswordForm from './components/PasswordForm';

const App = () => {
  return (
    <>
      <Container maxW="container.md" centerContent>
        <RegisterForm />
      </Container>
      <hr />
      <Container maxW="container.md" centerContent>
        <OverzichtGrid />
      </Container>
      <hr />
      <Container maxW="container.md" centerContent>
        <PasswordForm />
      </Container>
    </>
  );
};

export default App;
