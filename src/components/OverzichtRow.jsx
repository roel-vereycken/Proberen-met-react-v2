import React, {useState, useEffect} from 'react';
import moment from 'moment';
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
    

    console.log(datum)
    return (
        <Tr>
            <Td>{vervoersmiddel.naam}</Td>
            <Td>{moment(datum).calendar()}</Td>
            <Td textAlign="right">{kmStart}</Td>
            <Td textAlign="right">{kmStop}</Td>
            <Td>{locStart}</Td>
            <Td>{locStop}</Td>
            <Td textAlign="right">{afstand * tariefPrijs}</Td>
        </Tr>
    )
}

export default OverzichtRow
