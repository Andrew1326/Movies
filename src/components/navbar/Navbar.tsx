import React from 'react';
import { Box, Container, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import Offcanvas from './Offcanvas';
import { links } from '../../App';
import Links from '../shared/links/Links';

const Navbar = (): JSX.Element => {

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()

    //* props
    const offcanvasProps = {isOpen, onClose}

    //* main links
    const mainLinks = links.slice(0, 3)

    return (
        <>
        <Offcanvas children={undefined} {...offcanvasProps} />
        <Box w='100%' h='55px' bg='gray.700' position='fixed' top='0' left='0' zIndex='9999' display='flex' flexDirection='column' justifyContent='center'>
            <Container maxW='95%'>
            <Flex justifyContent='space-between'>
                <Box w='300px'>
                    <Flex justifyContent='space-evenly'>
                    <HamburgerIcon w='5' h='5' _hover={{cursor: 'pointer'}} onClick={isOpen ? onClose : onOpen} />
                    <Heading marginRight='2%' display='inline' as='h4' size='md' _hover={{cursor: 'pointer'}} onClick={() => navigate('/')}><i>Moovie</i></Heading>
                    <Links links={mainLinks} />
                    </Flex>
                </Box>
                <Box>
                    <SearchIcon w='4' h='4' _hover={{cursor: 'pointer'}} onClick={() => navigate('/search')} />
                </Box>
            </Flex>
            </Container>
        </Box>
        </>
    )
}

export default Navbar