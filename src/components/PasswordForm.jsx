import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
  } from '@chakra-ui/react';

function PasswordForm() {
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    const handleFormSubmit = event => {
        event.preventDefault();
    
        fetch('http://127.0.0.1:8000/api/users/1', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            password: password,
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
            setPassword('');
            setRepeatPassword('')
          });
      };
    

    return (
        <>
        <Navbar />
        <h1>Nieuw wachtwoord</h1>
        <form onSubmit={handleFormSubmit}>
          <Flex align="center" justify="center" flexDirection="column">
            <Input
              mb="10"
              type="text"
              name="voornaam"
              value={password}
              placeholder="Nieuw wachtwoord"
              onChange={e => setPassword(e.target.value)}
            />
            <Input
              mb="10"
              type="text"
              name="naam"
              value={repeatPassword}
              placeholder="Herhaal wachtwoord"
              onChange={e => setRepeatPassword(e.target.value)}
            />
            <Input type="submit" value="Verzend" />
          </Flex>
        </form>
        </>
    )
}

export default PasswordForm
