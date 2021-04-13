import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import {
    Input,
    Box,
    Center,
    FormControl,
    Flex,
    Wrap,
    Select
  } from '@chakra-ui/react';

function Verplaatsingen() {
    const [voornaam, setVoorNaam] = useState('');
    const [naam, setNaam] = useState('');
    const [kmStart, setKmStart] = useState('');
    const [kmStop, setKmStop] = useState('');
    const [startpunt, setStartpunt] = useState('');
    const [eindpunt, setEindpunt] = useState('');
    const [voertuig, setVoertuig] = useState('')
    const [select, setSelect] = useState([])

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/vervoersmiddels.json")
      .then(resp => resp.json())
      .then(data => {
        setSelect(data)
      })
      .catch(error => console.error(error))
    }, [])

    console.log(select)

    return (
        <>
        <Navbar />
        <Center>
        <Wrap>
        <Box>
        <h1 text-allign="center">Verplaatsingen</h1>
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
                type="kmStart"
                name="kmStart"
                value={kmStart}
                placeholder="Kilometer start"
                onChange={e => setKmStart(e.target.value)}
              />
              <Input
                mb="10"
                type="kmStop"
                name="kmStop"
                value={kmStop}
                placeholder="Kilometer stop"
                onChange={e => setKmStop(e.target.value)}
              />
              <Input
                mb="10"
                type="Startpunt"
                name="Startpunt"
                value={startpunt}
                placeholder="Startpunt"
                onChange={e => setStartpunt(e.target.value)}
              />
              <Input
                mb="10"
                type="Eindpunt"
                name="Eindpunt"
                value={eindpunt}
                placeholder="Eindpunt"
                onChange={e => setEindpunt(e.target.value)}
              />
              <select name="voertuig"  value={voertuig} onChange={e => setVoertuig(e.target.value)}>
                {select.map((object) => {
                  return(
                    <option>{object.naam}</option>
                  )
                })}
              </select>
            
              <Input type="submit" value="Registreer" />
            </Flex>
          </form>
        </FormControl>
        </Box>
        <Box w={"350px"}>
          <p>Info:</p>
          <p>Geef hier jouw gegevens in om je vergoeding aan te vragen.</p>
          <p>Tarieven:</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut aliquam eaque ad aut voluptatem architecto dolorum dolores expedita tempore rerum at voluptates quidem libero aspernatur sit deleniti. Eligendi sed, expedita totam, voluptatem reiciendis recusandae minus modi ipsa doloribus provident quasi culpa iure! Numquam ea ab, nisi distinctio minus saepe.</p>
        </Box>
        </Wrap>
        </Center>
       </> 
    )
}

export default Verplaatsingen
