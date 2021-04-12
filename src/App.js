import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <>
      <Container maxW="container.md" centerContent>
        <RegisterForm />
      </Container>
    </>
  );
};

export default App;
