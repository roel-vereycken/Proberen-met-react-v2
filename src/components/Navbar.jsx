import React from 'react'
import Logo from '../afbeeldingen/thedisplacementapplogo.png';
import Dummypic from '../afbeeldingen/Dummypic.jpg';
import {Link} from 'react-router-dom';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Flex,
    Text,
    IconButton,
    Image,
    Container,
    Center
  } from "@chakra-ui/react"





// Warningicon = Logo!! don't forget
// CheckCircleIcon = dropdown profielfoto

function Navbar() {
    return (
        <Center>
            <Container marginTop="70px" width="80%" mb="100px">
                <Box py={20}>
                    <Flex alignItems={"center"}>
                        <Box mr={"auto"}>
                            <a href="#" ><Image src={Logo} w={100} h={70} /> </a>
                        </Box>
                        <Box mr={10}><a href="#"><Text fontSize="10px ">Logout</Text></a></Box>
                        

                        <Menu>
                            <Center>
                            <MenuButton as={IconButton} borderRadius={50} border="10px solid #3cf0f0" width="55px" height="55px" variant={"link"} cursor={'pointer'}>
                            <Image borderRadius={50} background="none" src={Dummypic} w={50} h={50} pt="3px" pb="-3" pl="1"/>
                            </MenuButton>
                            </Center>
                                <MenuList>
                                    <Link to='/profiel'>
                                    <MenuItem className="IconDropDown" h={25} background="#00326f" border="none" borderTopRadius={5} color="white">Profiel</MenuItem>
                                    </Link>
                                    <hr/>
                                    <Link to='/verplaatsing'>
                                    <MenuItem className="IconDropDown" h={25} background="#00326f" border="none" color="white">Nieuwe verplaatsing</MenuItem>
                                    </Link>
                                    <hr/>
                                    <Link to='/overzicht'>
                                    <MenuItem className="IconDropDown" h={25} background="#00326f" border="none" borderBottomRadius={5} color="white">Overzicht</MenuItem>
                                    </Link>
                                </MenuList>
                        </Menu>
                    </Flex>
                </Box>
            </Container>
        </Center>
    )
}

export default Navbar





