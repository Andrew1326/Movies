import { Alert as ChakraAlert, AlertDescription, AlertIcon, AlertTitle, Center } from '@chakra-ui/react';
import React from 'react';
import { TAlertProps } from './alertTypes';

const Alert = ({status, title, description, ...rest}: TAlertProps): JSX.Element => {
    return (
        <Center p='10% 0 0 0'>
        <ChakraAlert status={status} {...rest} w={['90%', '70%', '50%']} display='flex' justifyContent='center' alignItems='center'>
            <AlertIcon />
            {
                title && <AlertTitle>{title}</AlertTitle>
            }
            <AlertDescription>{description}</AlertDescription>
        </ChakraAlert>
        </Center>
    )
} 

export default Alert