import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';
import RegisterForm from './components/RegisterForm';
import OverzichtGrid from './components/OverzichtGrid';
import PasswordForm from './components/PasswordForm';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import ProfielPagina from './components/ProfielPagina';
import Verplaatsingen from './components/Verplaatsingen';
import Styles from './style/style.scss'

const App = () => {
  return (
    <>
      <LoginForm />
      <hr/>
      <Verplaatsingen />
      <hr/>
      <ProfielPagina />
      <hr/>
      <Container maxW="container.lg" centerContent>
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
