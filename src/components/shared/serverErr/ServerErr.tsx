import React from 'react';
import { VStack } from '@chakra-ui/react';
import Alert from '../alert/Alert';
import { TMyAlertProps } from '../alert/alertTypes';
import Video from '../video/Video';

const ServerErr = ({title, description}: TMyAlertProps): JSX.Element => {
    return (
        <VStack>
            <Alert status='error' title={title} description={description} h='100px' maxW='800px' m='2% 0 0 0' />
            <Video src={require('../../../videos/server_err.mp4')} />
        </VStack>
    )
}

export default ServerErr