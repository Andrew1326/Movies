import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { TLinkProps } from './linksTypes';

type TProps = TLinkProps & { closeOffcanvas?: () => void }

const Links = ({ links, closeOffcanvas }: TProps): JSX.Element => {
    return (
        <>
        {
            links.map((el, i) => <Link key={i} to={el.to} fontSize='105%' fontStyle='italic' _hover={{ textDecoration: 'none', color: 'blue.300' }} _focus={{ border: 'none' }} onClick={closeOffcanvas} as={RouterLink}>{el.name}</Link>)
        }
        </>
    )
}

export default Links