import React, {useState, useEffect} from 'react'
import Logo from '../afbeeldingen/thedisplacementapplogo.png'
import {Link} from 'react-router-dom';
import {
    Input,
    FormControl,
    Flex,
    Center,
    Text,
    Box,
    Image
  } from '@chakra-ui/react';


function LoginForm() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handelLoginFormSubmit = (e) => {
      e.preventDefault();

      fetch('https://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
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
        
    };
    


    // VRAAG: IMAGE NEEMT GEEN PNG NOG JPEG AAN, ENKEL WEB URL'S
    return (
        <>
        <Center>
        <Image mt="100px" mb="10px" src={Logo} w={260} h={200} />
        </Center>
        
        <FormControl>
          <form onSubmit={handelLoginFormSubmit}>
            <Flex align="center" justify="center" flexDirection="column">
              <Box width="20%" minWidth="300px" >
                <Text fontSize="16px" mb="3" color="#3cf0f0">
                  Email:
                </Text>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Jouw email"
                  onChange={e => setEmail(e.target.value)}
                />
                <Text fontSize="16px" mb="3" color="#3cf0f0">
                  Wachtwoord:
                </Text>
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Jouw wachtwoord"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <Box mt="15px" bgColor="none">
                    <Flex align="center">
                    <Input 
                      id="buttonHover"
                      type="submit"
                      height="30px"
                      width="130px"
                      value="Verzenden" 
                      color="white"
                      bg="#00326f"
                      borderRadius="5"
                    />
                    <Text fontSize="12px" color="#00326f" my="0px" ml="5px">
                      Nog geen lid? Maak <Link to='/registratie'><a href="#">hier</a></Link> een nieuw account aan!
                    </Text>
                    </Flex>
                  </Box>
              </Box>
            </Flex>
          </form>
        </FormControl>
       </> 
    )
}

export default LoginForm
