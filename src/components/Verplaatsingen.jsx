import React, {useState, useEffect} from 'react'
import {
    Input,
    Box,
    Center,
    FormControl,
    Flex,
    Wrap,
    Text,
  } from '@chakra-ui/react';

function Verplaatsingen() {

    /**
   * GET USER ID
   */
    let userId = localStorage.getItem("user");
    userId = JSON.parse(userId);
    let id = userId.user


    const [datum, setDatum] = useState()
    // const [voornaam, setVoorNaam] = useState('');
    // const [naam, setNaam] = useState('');
    const [kmStart, setKmStart] = useState('');
    const [kmStop, setKmStop] = useState('');
    const [startpunt, setStartpunt] = useState('');
    const [eindpunt, setEindpunt] = useState('');

    const [optionsState, setOptionState] = useState("")

    const [voertuig, setVoertuig] = useState('')
    const [voertuigId, setVoertuigId] = useState('')
    const [select, setSelect] = useState([])
    const [user, setUser] = useState(1)   ///  USER ID NOG VERANDEREN IN ID

    /// ERROR MESSAGES
    const [errors, setErrors] = useState([]);
    // const [voertuigErrorMessage, setVoertuigErrorMessage] = useState("");
    // const [datumErrorMessage, setDatumErrorMessage] = useState("");
    // const [kmStartErrorMessage, setKmStartErrorMessage] = useState("");
    // const [kmStopErrorMessage, setKmStopErrorMessage] = useState("");
    // const [startpuntErrorMessage, setStartpuntErrorMessage] = useState("");
    // const [eindpuntErrorMessage, setEindpuntErrorMessage] = useState("");
    // let voertuigError = "";
    // let datumError = "";
    // let kmStartError = "";
    // let kmStopError = "";
    // let startpuntError = "";
    // let eindpuntError = "";

    useEffect(() => {
      console.log(errors, "errors check")
      // if(errors.length >= 1){
      //   if(errors.filter((object)=> object.propertyPath === "datum")){
      //     datumError = (errors.filter((object)=> object.propertyPath === "datum"));
      //     setDatumErrorMessage(datumError.map((obj)=> obj.message)) 
      //   }
      //   if(errors.filter((object)=> object.propertyPath === "kmStart")){
      //     kmStartError = (errors.filter((object)=> object.propertyPath === "kmStart"));
      //     setKmStartErrorMessage(kmStartError.map((obj)=> obj.message))
      //   }
      //   if(errors.filter((object)=> object.propertyPath === "kmStop")){
      //     kmStartError = (errors.filter((object)=> object.propertyPath === "kmStop"));
      //     setKmStopErrorMessage(kmStopError.map((obj)=> obj.message))
      //   }
      //   if(errors.filter((object)=> object.propertyPath === "locStart")){
      //     startpuntError = (errors.filter((object)=> object.propertyPath === "locStart"));
      //     setStartpuntErrorMessage(startpuntError.map((obj)=> obj.message))
      //   }
      //   if(errors.filter((object)=> object.propertyPath === "locStop")){
      //     eindpuntError = (errors.filter((object)=> object.propertyPath === "locStop"));
      //     setEindpuntErrorMessage(eindpuntError.map((obj)=> obj.message))
      //   }
      //   if(errors.filter((object)=> object.propertyPath === "vervoersmiddel")){
      //     voertuigError = (errors.filter((object)=> object.propertyPath === "vervoersmiddel"));
      //     setVoertuigErrorMessage(voertuigError.map((obj)=> obj.message))
      //   }
      // }
    }, [errors])

    useEffect(() => {
      fetch("https://127.0.0.1:8000/api/vervoersmiddels.json")
      .then(resp => resp.json())
      .then(data => {
        setSelect(data)
      })
      .catch(error => console.error(error))
    }, [])

    const handleVerplaatsingFormSubmit = (e) => {
      e.preventDefault()
      fetch('https://127.0.0.1:8000/api/verplaatsings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          datum: datum,
          kmStart: Number(kmStart),
          kmStop: Number(kmStop),
          locStart: startpunt,
          locStop: eindpunt,
          user: `/api/users/${user}`,
          vervoersmiddel: `api/vervoersmiddels/${optionsState}`
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('gelukt');
          console.log(data, "data check");
          //console.log(voertuig)
          // console.log(data.violations, "data violation log")
          // setErrors(data.violations)
          // if(data.violations){
          //   setErrors(data.violations)
          // }else{
          //   setErrors([]);
          //   // setAlert(true)
          // };
        })
        .catch(error => {
          console.log('mislukt');
          console.log(error, "main error check");
        })
        .finally(() => {
          
          setDatum('');
          setKmStart('');
          setKmStop('');
          setStartpunt('');
          setEindpunt('');
          setVoertuig([]);
        });
    };
    
    return (
      <>
      
      <Center>
      <Box width="80%" marginBottom="100px">
      <Center>
      <Wrap spacing="50px">
      <Box width="300px">
      <Text mb="10px" mt="0px" fontSize="25px" color="#00326f" text-allign="center">VERPLAATSINGEN</Text>
      <FormControl>
      <form onSubmit={handleVerplaatsingFormSubmit}>
                <Flex align="center" justify="center" flexDirection="column">
                <Box width="100%" >

                      <Text mt="5px" fontSize="16px" mb="3" color="#3cf0f0" align="left">
                        Voertuig:
                      </Text>
                      <select name="voertuig"  value={optionsState} onChange={e => {setOptionState(e.target.value)}}>
                        <option id="0"></option>
                          {select.map((object) => {
                            
                            return(
                              <option value={object.id}> {object.naam}</option>
                            )
                          })}
                      </select>

                      <Text mt="5px" fontSize="16px" mb="3" color="#3cf0f0" align="left">
                        Datum:
                      </Text>
                      <Input
                          mb="10"
                          type="datetime-local"
                          name="datum"
                          value={datum}
                          onChange={e => setDatum(e.target.value)}
                        />

                        <Text mt="5px" fontSize="16px" mb="3" color="#3cf0f0" align="left">
                        Km-start:
                        </Text>
                        <Input
                          mb="10"
                          type="number"
                          name="kmStart"
                          value={kmStart}
                          placeholder="Aantal kilometers"
                          onChange={e => setKmStart(e.target.value)}
                        />

                        <Text mt="5px" fontSize="16px" mb="3" color="#3cf0f0" align="left">
                        Km-stop:
                        </Text>
                        <Input
                          mb="10"
                          type="number"
                          name="kmStop"
                          value={kmStop}
                          placeholder="Aantal kilometers"
                          onChange={e => setKmStop(e.target.value)}
                        />

                        <Text mt="5px" fontSize="16px" mb="3" color="#3cf0f0" align="left">
                        Startpunt:
                        </Text>
                        <Input
                          mb="10"
                          type="text"
                          name="Startpunt"
                          value={startpunt}
                          placeholder="Adres"
                          onChange={e => setStartpunt(e.target.value)}
                        />
                        
                        <Text mt="5px" fontSize="16px" mb="3" color="#3cf0f0" align="left">
                        Eindpunt:
                        </Text>
                        <Input
                          mb="10"
                          type="text"
                          name="Eindpunt"
                          value={eindpunt}
                          placeholder="Adres"
                          onChange={e => setEindpunt(e.target.value)}
                        />
                      
                      <Wrap>
                      <Input
                      w="45%"
                      id="buttonHover"
                      type="submit"
                      height="30px"
                      value="Registreer" 
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
      <Center>
      <Box width="300px" >
        
        <Box>
        <Text fontSize="16px" color="#00326f" my="0px" ml="5px">Info:</Text>
        <Text fontSize="12px" color="#00326f" my="0px" ml="5px">Geef hier jouw gegevens in om je vergoeding aan te vragen.</Text>
        <br/>
        <Text fontSize="16px" color="#00326f" my="0px" ml="5px">Tarieven:</Text>
        <Text fontSize="12px" color="#00326f" my="0px" ml="5px">Neem je de auto?  1.25 per km.</Text>
        <Text fontSize="12px" color="#00326f" my="0px" ml="5px">Neem je de fiets? 1.95 per km.</Text>
        <br/>
        <Text fontSize="12px" color="#00326f" my="0px" ml="5px">Neem je de bus/trein?Vraag dan een aangifte aan <a href="#">hier</a>. Zo betalen wij een deel van uw abonnements kosten.</Text>
        </Box>
        
      </Box>
      </Center>
      </Wrap>
      </Center>
      </Box>
      </Center>
      
     </> 
  )
}

export default Verplaatsingen
