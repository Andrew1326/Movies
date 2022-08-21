import React from 'react';
import { Box, Flex, Heading, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import Offcanvas from './Offcanvas';
import { links } from '../../App';
import Links from '../shared/links/Links';

const Navbar = (): JSX.Element => {

    const [isSmallerThan768] = useMediaQuery('(max-width: 768px)')
    const [isSmallerThan480] = useMediaQuery('(max-width: 480px)')

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()

    //* props
    const offcanvasProps = {isOpen, onClose}

    return (
        <>
        <Offcanvas children={undefined} {...offcanvasProps} />
        <Box w='100%' h={['50px', '60px', '60px']} bg='gray.700' position='fixed' top='0' left='0' zIndex='9999' display='flex' flexDirection='column' justifyContent='center' px='2%'>
            <Flex justify='space-between' alignItems='center' w='100%'>
                <Flex flexDirection='row' w='10%'>
                    {
                        isSmallerThan768 && <Flex justify='center' align='center' mr='30%' w='40px' _hover={{cursor: 'pointer'}} onClick={isOpen ? onClose : onOpen}>
                        <HamburgerIcon w='5' h='5'  />
                    </Flex>
                    }
                    <Heading marginRight='2%' display='inline' as='h4' size='md' _hover={{cursor: 'pointer'}} onClick={() => navigate('/')}><i>Moovie</i></Heading>
                </Flex>
                <Flex w={['50%', '60%', '40%']} justify='space-around' align='center'>
                    <Links links={isSmallerThan768 && !isSmallerThan480 ? links.slice(0, 3) : isSmallerThan480 ? [] : links} />
                </Flex>
                <Flex w='10%' justify='center' align='center'>
                    <Flex justify='center' align='center' w='40px'_hover={{cursor: 'pointer'}} onClick={() => navigate('/search')}>
                        <SearchIcon w='4' h='4'  />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
        </>
    )
}

export default Navbar