import React, {useState, useEffect} from 'react'
import Profielfoto from "../afbeeldingen/Dummypic.jpg";
import {useHistory} from "react-router-dom";
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
    const [user, setUser] = useState(1);    /// HIER TERUG VERANDER IN ID
    const [alert, setAlert] = useState(false);

    const history = useHistory();

    

    // ERROR MESSAGES
    const [errors, setErrors] = useState([]);
    const [voornaamErrorMessage, setVoornaamErrorMessage] = useState("");
    const [naamErrorMessage, setNaamErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [functieErrorMessage, setFunctieErrorMessage] = useState("");
    let voornaamError = "";
    let naamError = "";
    let functieError ="";
    let emailError = "";


    
    useEffect(() => {
      console.log(errors)
      if(errors.length >= 1){
        if(errors.filter((object)=> object.propertyPath === "voornaam")){
          voornaamError = (errors.filter((object)=> object.propertyPath === "voornaam"));
          setVoornaamErrorMessage(voornaamError[0].message)
          
        }
        if(errors.filter((object)=> object.propertyPath === "email")){
          emailError = (errors.filter((object)=> object.propertyPath === "email"));
          setEmailErrorMessage(emailError[0].message)
        }
        if(errors.filter((object)=> object.propertyPath === "naam")){
          naamError = (errors.filter((object)=> object.propertyPath === "naam"));
          setNaamErrorMessage(naamError[0].message)
        }
        if(errors.filter((object)=> object.propertyPath === "Functie")){
          functieError = (errors.filter((object)=> object.propertyPath === "Functie"));
          setFunctieErrorMessage(functieError[0].message)
        }
      }
    }, [errors])

    useEffect(() => {
      fetch(`https://127.0.0.1:8000/api/users/${user}`)   //  /${user}.json
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
      fetch(`https://127.0.0.1:8000/api/users/${user}`, {     //  /${user}
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
          console.log(data.violations)
          if(data.violations){
            setErrors(data.violations)
          }else{
            setErrors([]);
          };
          setAlert(true)
        })
        .catch(error => {
          console.log('mislukt');
          console.log(error);
        })
        

        if (errors.length === 0){

          history.push("/profiel")
        }
        
    };

    
    return (
      <>
      
      /** ALERT MESSAGE */
      <Center>{alert && <Text fontSize="12px" color="green">Uw gegevens zijn aangepast!</Text>}</Center>  

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
                      {errors.length >= 1 && <Text fontSize="12px" color="red" >{voornaamErrorMessage}</Text>}

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
                        {errors.length >= 1 && <Text fontSize="12px" color="red" >{naamErrorMessage}</Text>}

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
                        {errors.length >= 1 && <Text fontSize="12px" color="red" >{emailErrorMessage}</Text>}

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
                        {errors.length >= 1 && <Text fontSize="12px" color="red" >{functieErrorMessage}</Text>}


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
