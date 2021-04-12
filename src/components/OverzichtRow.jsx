import React from 'react'
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

function OverzichtRow({row}) {
    const {datum, kmStart, kmStop, locStart, locStop, vervoersmiddel} = row
    const afstand = kmStop - kmStart
    return (
        <Tr>
            <Td>{vervoersmiddel.naam}</Td>
            <Td>{datum}</Td>
            <Td>{kmStart}</Td>
            <Td>{kmStop}</Td>
            <Td>{locStart}</Td>
            <Td>{locStop}</Td>
            <Td>{afstand * (vervoersmiddel.tarieven[0].prijs)}</Td>
        </Tr>
    )
}

export default OverzichtRow
