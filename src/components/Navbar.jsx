import React from 'react'
import { WarningIcon, CheckCircleIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Flex,
    Icon,
    IconButton
  } from "@chakra-ui/react"





// Warningicon = Logo!! don't forget
// CheckCircleIcon = dropdown profielfoto

function Navbar() {
    return (
        <Box py={20} backgroundColor="yellow">
            <Flex alignItems={"center"}>
            <Box mr={"auto"}>
                <a href="#" ><WarningIcon w={100} h={100} color="red" /> </a>
            </Box>
            <Box mr={10}><a href="#"><p>Logout</p></a></Box>
            

            <Menu>
                <MenuButton as={IconButton} borderRadius={50} variant={"link"} cursor={'pointer'}>
                <CheckCircleIcon  w={50} h={50} color="green"/>
                </MenuButton>
                    <MenuList>
                        <MenuItem>Profiel</MenuItem>
                        <MenuItem>Verplaatsing</MenuItem>
                        <MenuItem>Overzicht</MenuItem>
                    </MenuList>
            </Menu>
            </Flex>
        </Box>
    )
}

export default Navbar





