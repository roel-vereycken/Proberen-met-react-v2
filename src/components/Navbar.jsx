import React from 'react'
import { WarningIcon, CheckCircleIcon } from '@chakra-ui/icons'
import Logo from '../afbeeldingen/thedisplacementapplogo.png';
import Dummypic from '../afbeeldingen/Dummypic.jpg';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Flex,
    Text,
    IconButton,
    Image
  } from "@chakra-ui/react"





// Warningicon = Logo!! don't forget
// CheckCircleIcon = dropdown profielfoto

function Navbar() {
    return (
        <Box py={20} backgroundColor="yellow">
            <Flex alignItems={"center"}>
            <Box mr={"auto"}>
                <a href="#" ><Image  src={Logo} w={100} h={70} /> </a>
            </Box>
            <Box mr={10}><a href="#"><Text fontSize="10px ">Logout</Text></a></Box>
            

            <Menu>
                <MenuButton as={IconButton} borderRadius={50} width="48px" height="48px" variant={"link"} cursor={'pointer'}>
                <Image borderRadius={50}  src={Dummypic} w={50} h={50} />
                </MenuButton>
                    <MenuList>
                        <MenuItem color="white">Profiel</MenuItem>
                        <MenuItem color="white">Verplaatsing</MenuItem>
                        <MenuItem color="white">Overzicht</MenuItem>
                    </MenuList>
            </Menu>
            </Flex>
        </Box>
    )
}

export default Navbar





