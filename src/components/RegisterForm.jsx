import React, {useState, useEffect} from 'react'
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
    const [functie, setFunctie] = useState('');

    // DOORVERWIJZING LINK
    const history = useHistory();

    // ERROR MESSAGES
    const [errors, setErrors] = useState([]);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState([]);
    const [emailErrorMessage, setEmailErrorMessage] = useState([]);
    const [voornaamErrorMessage, setVoornaamErrorMessage] = useState([]);
    const [naamErrorMessage, setNaamErrorMessage] = useState([]);
    const [functieErrorMessage, setFunctieErrorMessage] = useState([]);
    let emailError ="";
    let passwordError ="";
    let voornaamError = "";
    let naamError ="";
    let functieError = "";


    /// FUNCTIEBESCHRIJVING WORD NIET MEE DOORGEGEVEN AAN DE DATABANK
    

    useEffect(() => {
      console.log(errors)
      if(errors.length >= 1){
        if(errors.filter((object)=> object.propertyPath === "email")){
          emailError = (errors.filter((object)=> object.propertyPath === "email"));
          setEmailErrorMessage(emailError.map((obj) => obj.message))
          
        }
        if(errors.filter((object)=> object.propertyPath === "password")){
          passwordError = (errors.filter((object)=> object.propertyPath === "password"));
          setPasswordErrorMessage(passwordError.map((obj) => obj.message))
          //console.log(passwordErrorMessage)
        }
        if(errors.filter((object)=> object.propertyPath === "voornaam")){
          voornaamError = (errors.filter((object)=> object.propertyPath === "voornaam"));
          setVoornaamErrorMessage(voornaamError.map((obj) => obj.message))
          //console.log(voornaamErrorMessage)
        }
        if(errors.filter((object)=> object.propertyPath === "naam")){
          naamError = (errors.filter((object)=> object.propertyPath === "naam"));
          setNaamErrorMessage(naamError.map((obj) => obj.message))
          //console.log(voornaamErrorMessage)
        }
        if(errors.filter((object)=> object.propertyPath === "Functie")){
          functieError = (errors.filter((object)=> object.propertyPath === "Functie"));
          setFunctieErrorMessage(functieError.map((obj) => obj.message))
          //console.log(voornaamErrorMessage)
        }
      }
    }, [errors])

    
  
    const handleFormSubmit = event => {
      event.preventDefault();

      
  
      fetch('https://127.0.0.1:8000/api/users', {
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
          Functie: functie
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('gelukt');
          console.log(data);
          if(data.violations){
            setErrors(data.violations)
          }else{
            setErrors([]);
            history.push('/') /// Hiermee verwijs je door naar de gewenste pagina. Controle op errors, zo niet wijs door naar logig
          };
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
          setFunctie('');
          });
        




        
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
              {errors.length >= 1 && <Text fontSize="12px" color="red" >{voornaamErrorMessage}</Text>}

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
              {errors.length >= 1 && <Text fontSize="12px" color="red" >{naamErrorMessage}</Text>}

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
              {errors.length >= 1 && <Text fontSize="12px" color="red" >{passwordErrorMessage}</Text>}


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
              {errors.length >= 1 && <Text fontSize="12px" color="red" >{emailErrorMessage}</Text>}

              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Functie:
              </Text>
              <Input
                type="text"
                name="functie"
                value={functie}
                placeholder="Jobbeschrijving"
                onChange={e => setFunctie(e.target.value)}
              />
              {errors.length >= 1 && <Text fontSize="12px" color="red" >{functieErrorMessage}</Text>}

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
