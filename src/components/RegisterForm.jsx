import React, {useState} from 'react'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
  } from '@chakra-ui/react';

function RegisterForm() {
    const [voornaam, setVoorNaam] = useState('');
    const [naam, setNaam] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const handleFormSubmit = event => {
      event.preventDefault();
  
      fetch('http://127.0.0.1:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          naam: naam,
          voornaam: voornaam,
          photo: '/',
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('gelukt');
          console.log(data);
        })
        .catch(error => {
          console.log('mislukt');
          console.log(error);
        })
        .finally(() => {
          setNaam('');
          setVoorNaam('');
          setPassword('');
          setEmail('');
        });
    };
    return (
        <>
        <h1 text-allign="center">Registreerformulier</h1>
        <FormControl>
          <form onSubmit={handleFormSubmit}>
            <Flex align="center" justify="center" flexDirection="column">
              <Input
                mb="10"
                type="text"
                name="voornaam"
                value={voornaam}
                placeholder="Jouw voornaam"
                onChange={e => setVoorNaam(e.target.value)}
              />
              <Input
                mb="10"
                type="text"
                name="naam"
                value={naam}
                placeholder="Jouw naam"
                onChange={e => setNaam(e.target.value)}
              />
              <Input
                mb="10"
                type="password"
                name="password"
                value={password}
                placeholder="Wachtwoord"
                onChange={e => setPassword(e.target.value)}
              />
              <Input
                mb="10"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              />
              <Input type="submit" value="Registreer" />
            </Flex>
          </form>
        </FormControl>
       </> 
    )
}

export default RegisterForm
