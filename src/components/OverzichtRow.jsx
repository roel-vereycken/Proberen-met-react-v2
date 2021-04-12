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
    return (
        <Tr>
            <Td>{row.vervoersmiddel.naam}</Td>
            <Td>{row.datum}</Td>
            <Td>{row.kmStart}</Td>
            <Td>{row.kmStop}</Td>
            <Td>{row.locStart}</Td>
            <Td>{row.locStop}</Td>
        </Tr>
    )
}

export default OverzichtRow
