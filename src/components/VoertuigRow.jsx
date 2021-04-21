import React from 'react'
import {
    Tr, Td
  } from '@chakra-ui/react';

function VoertuigRow({row}) {
    const {naam, tarieven} = row

    return (
        <>
        <Tr>
            <Td>{naam}</Td>
            <Td>{tarieven[0].prijs}</Td>
            
        </Tr>
        </>
    )
}

export default VoertuigRow
