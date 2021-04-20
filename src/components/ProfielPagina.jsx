import React, {useState, useEffect} from 'react'
import Profielfoto from "../afbeeldingen/Dummypic.jpg"
import {
    Input,
    FormControl,
    Flex,
    Box,
    Image,
    Wrap,
    Center,
    Text
  } from '@chakra-ui/react';



function ProfielPagina() {

  /**
   * GET USER ID
   */
    let userId = localStorage.getItem("user");
      userId = JSON.parse(userId);
      let id = userId.user

    const [voornaam, setVoorNaam] = useState('');
    const [naam, setNaam] = useState('');
    const [functie, setFunctie] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(id)

    

    useEffect(() => {
      fetch(`https://127.0.0.1:8000/api/users/${user}.json`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setNaam(data.naam)
        setVoorNaam(data.voornaam)
        setEmail(data.email)
        setFunctie(data.Functie)
      })
      .catch(error => console.error(error))
    }, [user])

    const handleProfileFormSubmit = (e) => {
      e.preventDefault()
      fetch(`https://127.0.0.1:8000/api/users/${user}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          naam: naam,
          voornaam: voornaam,
          photo: '/',
          Functie: functie
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

    
    return (
      <>
      
      <Center>
      <Box width="80%" pb="300px">
      <Center>
      <Wrap spacing="50px">
      <Center>
      <Box width="200px" >
        <Box width="100px">
            <Text mb="10px" mt="0px" fontSize="25px" color="#00326f" text-allign="center">PROFIELPAGINA</Text>
            <Image borderRadius={15} boxSize="200px" src={Profielfoto} fallbackSrc="https://via.placeholder.com/150/"/>
            <Input
                      mt="5px"
                      w="200px"
                      id="buttonHover"
                      type="submit"
                      height="30px"
                      value="Bewerk" 
                      color="white"
                      bg="#00326f"
                      borderRadius="5"
                      />
        </Box> 
      </Box>
      </Center>

      
      <Box width="300px">
      <FormControl>
      <form onSubmit={handleProfileFormSubmit}>
                <Flex align="center" justify="center" flexDirection="column">
                <Box width="100%">
                      <Text mt="5px" fontSize="16px" mb="3" color="#3cf0f0" align="left">
                        Voornaam:
                      </Text>
                      <Input
                        mb="10"
                        type="text"
                        name="voornaam"
                        value={voornaam}
                        placeholder="Jouw voornaam"
                        onChange={e => setVoorNaam(e.target.value)}
                      />
                        <Text mt="5px" fontSize="16px" mb="3" color="#3cf0f0" align="left">
                        Naam:
                        </Text>
                        <Input
                          mb="10"
                          type="text"
                          name="naam"
                          value={naam}
                          placeholder="Jouw naam"
                          onChange={e => setNaam(e.target.value)}
                        />
                        <Text mt="5px" fontSize="16px" mb="3" color="#3cf0f0" align="left">
                        Email:
                        </Text>
                        <Input
                          mb="10"
                          type="email"
                          name="email"
                          value={email}
                          placeholder="Email"
                          onChange={e => setEmail(e.target.value)}
                        />
                        <Text mt="5px" fontSize="16px" mb="3" color="#3cf0f0" align="left">
                        Functie:
                        </Text>
                        <Input
                          mb="10"
                          type="functie"
                          name="functie"
                          value={functie}
                          placeholder="Functie"
                          onChange={e => setFunctie(e.target.value)}
                        />
                      <Wrap>
                      <Input
                      w="45%"
                      id="buttonHover"
                      type="submit"
                      height="30px"
                      value="Opslaan" 
                      color="white"
                      bg="#00326f"
                      borderRadius="5"
                      />
                      <Input
                      w="45%"
                      id="buttonHoverAnnuleer"
                      type="submit"
                      height="30px"
                      value="Annuleer" 
                      color="white"
                      bg="darkred"
                      borderRadius="5"
                      />
                      </Wrap>

                      </Box>

                </Flex>

              </form>
      </FormControl>
      </Box>
      </Wrap>
      </Center>
      </Box>
      </Center>
      
     </> 
  )
}

export default ProfielPagina
