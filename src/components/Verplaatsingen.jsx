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
    const [datum, setDatum] = useState()
    // const [voornaam, setVoorNaam] = useState('');
    // const [naam, setNaam] = useState('');
    const [kmStart, setKmStart] = useState('');
    const [kmStop, setKmStop] = useState('');
    const [startpunt, setStartpunt] = useState('');
    const [eindpunt, setEindpunt] = useState('');
    const [voertuig, setVoertuig] = useState('')
    const [select, setSelect] = useState([])

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
          user: "/api/users/1",
          vervoersmiddel: `api/vervoersmiddels/${voertuig.charAt(0)}`
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('gelukt');
          console.log(data);
          console.log(voertuig)
        })
        .catch(error => {
          console.log('mislukt');
          console.log(error);
        })
        .finally(() => {
          
          setDatum('');
          setKmStart('');
          setKmStop('');
          setStartpunt('');
          setEindpunt('');
          setVoertuig('');
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
                        
                        <select name="voertuig"  value={voertuig} onChange={e => {setVoertuig(e.target.value); console.log(voertuig)}}>
                        <option id="0"></option>
                          {select.map((object) => {
                            return(
                              <option id={object.id}>{object.id}. {object.naam}</option>
                            )
                          })}
                        </select>
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
