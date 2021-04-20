import React, {useState, useEffect} from 'react'
import {
    Tr,
    Td,
  } from "@chakra-ui/react"

function OverzichtRow({row}) {
    const {datum, kmStart, kmStop, locStart, locStop, vervoersmiddel} = row
    const [tarief, setTarief] = useState(vervoersmiddel.tarieven.filter((obj) => {return obj.published === true}))
    const [tariefPrijs, setTariefPrijs] = useState()
    const afstand = kmStop - kmStart

    useEffect(() => {
        if (tarief.length >= 1 ) {
            setTariefPrijs(tarief[0].prijs)
        }
    }, [tarief])
    

    console.log(tarief)
    return (
        <Tr>
            <Td>{vervoersmiddel.naam}</Td>
            <Td>{datum}</Td>
            <Td>{kmStart}</Td>
            <Td>{kmStop}</Td>
            <Td>{locStart}</Td>
            <Td>{locStop}</Td>
            <Td>{afstand * tariefPrijs}</Td>
        </Tr>
    )
}

export default OverzichtRow
