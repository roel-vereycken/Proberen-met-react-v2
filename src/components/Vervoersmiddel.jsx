import React, {useState, useEffect} from 'react'
import {
    Center, Table, Thead, Tr, Th, Tbody, 
    Input,
    FormControl,
    Flex,
    Text,
    Box
  } from '@chakra-ui/react';
import VoertuigRow from './VoertuigRow';

function Vervoersmiddel() {
    const [naam, setNaam] = useState('');
    const [prijs, setPrijs] = useState();
    const [datum, setDatum] = useState();
    const [categorie, setCategorie] = useState();

    const [settings, setSettings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/vervoersmiddels.json?user.id=1")
      .then(resp => resp.json())
      .then(data => {
          //console.log(data)
          setSettings(data)
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
    }, [])

    const handleVervoersmiddelFormSubmit = (e) => {
    e.preventDefault();

    fetch('https://127.0.0.1:8000/api/vervoersmiddels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            naam: naam,
            "tarieven": [
                {
                prijs: Number(prijs),
                datum: datum,
                "published": true
                }
                    ],
            user: "/api/users/1",
            categorie: "/api/categories/1"
        }),
      })
      .then(response => response.json())
        .then(data => {
          console.log('gelukt');
          console.log(data);
          console.log(datum)
        })
        .catch(error => {
          console.log('mislukt');
          console.log(error);
        })
        .finally(() => {
          setNaam('');
          setPrijs(0);
          setDatum();
          setCategorie();
        });
    }

    return (
        <>
            <FormControl>
          <form onSubmit={handleVervoersmiddelFormSubmit}>
          
            <Flex align="center" justify="center" flexDirection="column">
            <Box width="20%" minWidth="300px" paddingTop="150px" pb="350px">
              <Text fontSize="25px" mb="3" color="#00326f" mt="0px">
                VERVOERSMIDDEL
              </Text>

              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Naam:
              </Text>
              <Input
                type="text"
                name="naam"
                value={naam}
                placeholder="Naam"
                onChange={e => setNaam(e.target.value)}
              />

              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Prijs:
              </Text>
              <Input
                type="number"
                step="0.1"
                name="prijs"
                value={prijs}
                placeholder="0"
                onChange={e => setPrijs(e.target.value)}
              />

              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Datum:
              </Text>
              <Input

                type="date"
                name="datum"
                value={datum}
                //placeholder="Wachtwoord"
                onChange={e => setDatum(e.target.value)}
              />
              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Categorie:
              </Text>
              <select name="categorie"  value={categorie} onChange={e => {setCategorie(e.target.value)}}>
                        <option id="0"></option>
                        <option id="1">Auto</option>
                        <option id="2">Fiets</option>
                        </select>
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

        <div>
            <Center>
            <Box>
                <Flex align="center">
            <Text fontWeight="extrabold" color="#00326f"  fontSize={32}>OVERZICHT</Text>
            
                      </Flex>
            <Table variant="simple" size="lg">
                    <Thead>
                        <Tr>
                        <Th id="borderL">Naam</Th>
                        <Th>Tarief</Th>
                        <Th>Datum</Th>
                        <Th>Categorie</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                            {loading && <p>Loading ...</p>}
                            {settings && settings.map((row) => {
                                return(
                                    <VoertuigRow key={row.id} row={row}/>
                                )
                            })}
                    </Tbody>
                    </Table>
                    </Box>
                    </Center>
        </div>
       </> 
    )
}

export default Vervoersmiddel
