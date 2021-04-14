import React, {useState} from 'react'
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


    // VRAAG: IMAGE NEEMT GEEN PNG NOG JPEG AAN, ENKEL WEB URL'S
    return (
        <>
        <Image  src='../afbeeldingen/thedisplacementapplogo.png' w={10} h={10} />

        <Center>
        <Box id="logobackgroundtest">
        </Box>
        </Center>
        
        <FormControl>
          <form>
            <Flex align="center" justify="center" flexDirection="column">
              <Box width="20%" minWidth="300px">
                <Text fontSize="16px" mb="3" color="#3cf0f0">
                  Email:
                </Text>
                <Input
                  color="black"
                  outline="none"
                  bg="white"
                  borderRadius="5"
                  height="25"
                  width="100%"
                  border="none"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                />
                <Text fontSize="16px" mb="3" color="#3cf0f0">
                  Wachtwoord:
                </Text>
                  <Input
                    color="black"
                    outline="none"
                    bg="white"
                    borderRadius="5"
                    border="none"
                    height="25"
                    width="100%"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Wachtwoord"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <Box mt="15px" bgColor="none">
                    <Flex align="center">
                    <Input 
                      id="buttonHover"
                      type="submit"
                      border="none"
                      boxShadow="none"
                      outline="none"
                      height="30px"
                      width="130px"
                      value="Verzenden" 
                      color="white"
                      outline="none"
                      bg="#00326f"
                      borderRadius="5"
                    />
                    <Text fontSize="12px" color="#00326f" my="0px" ml="5px">
                      Nog geen lid? Maak <a href="#">hier</a> een nieuw account aan!
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
