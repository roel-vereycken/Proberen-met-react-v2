import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {
    Input,
    FormControl,
    Flex,
    Text,
    Box
  } from '@chakra-ui/react';

function RegisterForm() {
    const [voornaam, setVoorNaam] = useState('');
    const [naam, setNaam] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
  
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
        history.push('/login') /// Hiermee verwijs je door naar de gewenste pagina. Best nog een controle tussensteken.
    };
    return (
        <>
        <FormControl>
          <form onSubmit={handleFormSubmit}>
          
            <Flex align="center" justify="center" flexDirection="column">
            <Box width="20%" minWidth="300px" paddingTop="150px" pb="350px">
              <Text fontSize="25px" mb="3" color="#00326f" mt="0px">
                REGISTRATIE
              </Text>
              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Voornaam:
              </Text>
              <Input

                type="text"
                name="voornaam"
                value={voornaam}
                placeholder="Jouw voornaam"
                onChange={e => setVoorNaam(e.target.value)}
              />
              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Naam:
              </Text>
              <Input

                type="text"
                name="naam"
                value={naam}
                placeholder="Jouw naam"
                onChange={e => setNaam(e.target.value)}
              />
              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Wachtwoord:
              </Text>
              <Input

                type="password"
                name="password"
                value={password}
                placeholder="Wachtwoord"
                onChange={e => setPassword(e.target.value)}
              />
              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Email:
              </Text>
              <Input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
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
        </FormControl>
       </> 
    )
}

export default RegisterForm
