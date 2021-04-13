import React, {useState} from 'react'
import Navbar from "./Navbar"
import {
    Input,
    FormControl,
    Flex,
    Text
  } from '@chakra-ui/react';


function LoginForm() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <>
        <Navbar />
        <Text  fontWeight="extrabold" fontSize={32} textAlign={[ 'left', 'center' ]}>Login</Text>
        <FormControl>
          <form>
            <Flex align="center" justify="center" flexDirection="column">
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

export default LoginForm
