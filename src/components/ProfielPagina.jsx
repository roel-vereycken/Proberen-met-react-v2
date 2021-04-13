import React, {useState} from 'react'
import Navbar from "./Navbar"
import {
    Input,
    FormControl,
    Flex,
    Box,
    Image,
    Wrap,
    Center
  } from '@chakra-ui/react';



// HIER GESTOPT MET WERKEN !!! Voeg foto toe naast formulier.
function ProfielPagina() {
    const [voornaam, setVoorNaam] = useState('');
    const [naam, setNaam] = useState('');
    const [functie, setFunctie] = useState('');
    const [email, setEmail] = useState('');

    return (
        <>
        <Navbar />
        <Center>
        <Wrap spacing="40px">
        <Box>
            <h1 text-allign="center">Profielpagina</h1>
            <Image borderRadius={15} boxSize="200px" src="https://www.nintendoenthusiast.com/wp-content/uploads/2019/02/green-fire-800x400.jpg" fallbackSrc="https://via.placeholder.com/150/"/>
        </Box>
        <Box  paddingTop="82px">
        <FormControl>
          <form>
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
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                mb="10"
                type="functie"
                name="functie"
                value={functie}
                placeholder="Functie"
                onChange={e => setFunctie(e.target.value)}
              />
            
              
              <Input type="submit" value="Registreer" />
            </Flex>
          </form>
        </FormControl>
        </Box>
        </Wrap>
        </Center>
        
       </> 
    )
}

export default ProfielPagina
