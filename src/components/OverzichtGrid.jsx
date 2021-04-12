import React, {useState, useEffect} from 'react'
import OverzichtRow from "./OverzichtRow"
import {
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

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/verplaatsings.json")
        .then(resp => resp.json())
        .then(data => {
            //console.log(data)
            setSettings(data)
        })
        .catch(error => console.error(error))
      }, [])

      console.log(settings)

    return (
        <div>
            <h1>Verplaatsingen</h1>
            <Table variant="simple" size="lg">
                    <Thead>
                        <Tr>
                        <Th>Vervoersmiddel</Th>
                        <Th>Datum</Th>
                        <Th isNumeric>KM/Start</Th>
                        <Th isNumeric>KM/Stop</Th>
                        <Th>Startlocatie</Th>
                        <Th >Stoplocatie</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
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
