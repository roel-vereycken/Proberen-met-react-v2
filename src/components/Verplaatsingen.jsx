import React, {useState} from 'react'
import Navbar from './Navbar'
import {
    Input,
    FormControl,
    Flex,
    Select
  } from '@chakra-ui/react';

function Verplaatsingen() {
    const [voornaam, setVoorNaam] = useState('');
    const [naam, setNaam] = useState('');
    const [kmStart, setKmStart] = useState('');
    const [kmStop, setKmStop] = useState('');
    const [startpunt, setStartpunt] = useState('');
    const [eindpunt, setEindpunt] = useState('');


    return (
        <>
        <Navbar />
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
              <Select placeholder="Type verplaatsing">
                <option value="option1">Auto</option>
                <option value="option2">Fiets</option>
                </Select>
              <Input type="submit" value="Registreer" />
            </Flex>
          </form>
        </FormControl>
       </> 
    )
}

export default Verplaatsingen
