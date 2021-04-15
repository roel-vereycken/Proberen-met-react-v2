import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Box,
    Text
  } from '@chakra-ui/react';

function PasswordForm() {
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    const handleFormSubmit = event => {
        event.preventDefault();
    
        fetch('https://127.0.0.1:8000/api/users/1', {
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
        <form onSubmit={handleFormSubmit}>
          <Flex align="center" justify="center" flexDirection="column">
          <Box width="20%" minWidth="300px">
            <Text fontSize="25px" mb="3" color="#00326f" mt="0px">
                NIEUW WACHTWOORD
            </Text>
            <Text fontSize="16px" mb="3" color="#3cf0f0">
                Wachtwoord:
            </Text>
            <Input
              type="text"
              name="voornaam"
              value={password}
              placeholder="Nieuw wachtwoord"
              onChange={e => setPassword(e.target.value)}
            />
            <Text fontSize="16px" mb="3" color="#3cf0f0">
                Wachtwoord:
            </Text>
            <Input
              type="text"
              name="naam"
              value={repeatPassword}
              placeholder="Herhaal wachtwoord"
              onChange={e => setRepeatPassword(e.target.value)}
            />
            <Input
                      mt="15px"
                      w="100%"
                      id="buttonHover"
                      type="submit"
                      height="30px"
                      value="Registreer" 
                      color="white"
                      bg="#00326f"
                      borderRadius="5"
                      />
            </Box>
          </Flex>
        </form>
        </>
    )
}

export default PasswordForm
