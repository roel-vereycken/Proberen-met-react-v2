import React, {useState, useEffect} from 'react'
import OverzichtRow from "./OverzichtRow"
import {
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Box,
    Center,
    Input,
    
    Flex
  } from "@chakra-ui/react"
import {Link} from 'react-router-dom';

function OverzichtGrid() {

    let userId = localStorage.getItem("user");
      userId = JSON.parse(userId);
      let id = userId.user

      const [user, setUser] = useState(id);
    // const [datum, setDatum] = useState("")
    // const [vervoersmiddel, setVervoersMiddel] = useState("")
    // const [kmStart, setKmStart] = useState("")
    // const [kmStop, setKmStop] = useState("")
    // const [locStart, setLocStart] = useState("")
    // const [locStop, setLocStop] = useState("")

    const [settings, setSettings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/verplaatsings.json?order[datum]=desc&user.id=${user}`)
        .then(resp => resp.json())
        .then(data => {
            //console.log(data)
            setSettings(data)
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
      }, [])

      const handleDownloadClick = (e) => {
        e.preventDefault()
        console.log("klik")

        fetch(`http://127.0.0.1:8000/api/verplaatsings.csv?order%5Bdatum%5D=desc&user.id=${user}`)
        .then(resp => resp.json())
        .then(data => {
            
           console.log(data)
        })
        .catch(error => console.error(error))
        
      }

    return (
        
        <div>
            <Center>
            <Box>
                <Flex align="center">
            <Text fontWeight="extrabold" color="#00326f"  fontSize={32}>OVERZICHT</Text>
            <a
            id="rotKnop"
            target='_blank' href={`http://127.0.0.1:8000/api/verplaatsings.csv?order%5Bdatum%5D=desc&user.id=${user}`}
            >
            <Input
                      ml="auto"
                      w="100px"
                      id="buttonHover"
                      type="submit"

                      


                      height="30px"
                      value="Download" 
                      color="white"
                      bg="#00326f"
                      borderRadius="5"
                      />
                      </a>
                      </Flex>
            <Table variant="simple" size="lg">
                    <Thead>
                        <Tr>
                        <Th id="borderL">Vervoersmiddel</Th>
                        <Th>Datum</Th>
                        <Th isNumeric>KM/Start</Th>
                        <Th isNumeric>KM/Stop</Th>
                        <Th>Startlocatie</Th>
                        <Th>Stoplocatie</Th>
                        <Th id="borderR">Vergoeding</Th>
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
                    </Box>
                    </Center>
        </div>
    )
}

export default OverzichtGrid
