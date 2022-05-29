import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { TLinkProps } from './linksTypes';

const Links = ({ links }: TLinkProps): JSX.Element => {
    return (
        <>
        {
            links.map((el, i) => <Link key={i} to={el.to} as={RouterLink}>{el.name}</Link>)
        }
        </>
    )
}

export default Links