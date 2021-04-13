import React, {useState, useEffect} from 'react'
import OverzichtRow from "./OverzichtRow"
import Navbar from './Navbar'
import {
    Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"

function OverzichtGrid() {
    // const [datum, setDatum] = useState("")
    // const [vervoersmiddel, setVervoersMiddel] = useState("")
    // const [kmStart, setKmStart] = useState("")
    // const [kmStop, setKmStop] = useState("")
    // const [locStart, setLocStart] = useState("")
    // const [locStop, setLocStop] = useState("")

    const [settings, setSettings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/verplaatsings.json")
        .then(resp => resp.json())
        .then(data => {
            //console.log(data)
            setSettings(data)
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
      }, [])

      console.log(settings)

    return (
        
        <div>
            <Navbar />
            <Text  fontWeight="extrabold" fontSize={32} textAlign={[ 'left', 'center' ]}>Verplaatsingen</Text>
            <Table variant="simple" size="lg">
                    <Thead>
                        <Tr>
                        <Th>Vervoersmiddel</Th>
                        <Th>Datum</Th>
                        <Th isNumeric>KM/Start</Th>
                        <Th isNumeric>KM/Stop</Th>
                        <Th>Startlocatie</Th>
                        <Th>Stoplocatie</Th>
                        <Th>Vergoeding</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                            {loading && <p>Loading ...</p>}
                            {settings && settings.map((row) => {
                                return(
                                    <OverzichtRow key={row.id} row={row}/>
                                )
                            })}
                    </Tbody>
                    </Table>
        </div>
    )
}

export default OverzichtGrid
