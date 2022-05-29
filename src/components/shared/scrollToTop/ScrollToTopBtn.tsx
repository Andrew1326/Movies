import { ArrowUpIcon } from '@chakra-ui/icons';
import { Button, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const ScrollToTopBtn = (): JSX.Element => {
    const [scrollNeeded, setScrollNeeded] = useState<boolean>(false)

    //* scrolling to top when state changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        setScrollNeeded(false)
    }, [scrollNeeded])

    //* click
    const click = () => setScrollNeeded(true)

    return ( 
    <Center>
        <Button onClick={click}><ArrowUpIcon /></Button>
    </Center> 
    )
}

export default ScrollToTopBtn