import { Box } from '@chakra-ui/react';
import React from 'react';
import Video from '../../shared/video/Video';

const NotFound = (): JSX.Element => {
    return (
        <Box w='100%'>
            <Box position='fixed' left='50%' top='50%' transform='translate(-50%, -50%)'>
                <Video src={require('../../../videos/404.mp4')} />
            </Box>
        </Box>
    )
}

export default NotFound