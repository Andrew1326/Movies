import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import Alert from '../alert/Alert';
import { TMyAlertProps } from '../alert/alertTypes';
import Video from '../video/Video';

const ServerErr = ({title, description}: TMyAlertProps): JSX.Element => {
    return (
        <Box>
            <Alert status='error' title={title} description={description} h='100px' w='100%' m='2% 0 0 0' />
            <Center>
            <Video src={require('../../../videos/server_err.mp4')} />
            </Center>
        </Box>
    )
}

export default ServerErr