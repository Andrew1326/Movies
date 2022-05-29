import { Box, Text, VStack, Heading } from '@chakra-ui/react';
import React from 'react';
import { useSaved } from '../../../contexts/SavedContext';
import { filterByTitle } from '../../../functions';
import useInput from '../../../hooks/useInput';
import ItemList from '../../shared/itemList/ItemList';
import ScrollToTopBtn from '../../shared/scrollToTop/ScrollToTopBtn';
import Video from '../../shared/video/Video';

const Saved = (): JSX.Element => {
    const [title, Input] = useInput()

    const saved = useSaved()

    return (
        <Box w='100%' p='1%' marginTop={['18%', '10%', '5%']}>
            {
                saved.length > 0 ? <Box>
                <VStack spacing='2%' p='2% 2% 0 2%'>
                    <Heading size='xl'>Saved items for watching</Heading>
                    {
                        saved.length > 7 && Input
                    }
                </VStack>
                <ItemList items={saved.length > 7 ? filterByTitle(saved, title) : saved} />
                {
                    saved.length > 7 && <ScrollToTopBtn />
                }
            </Box> 
                : 
                <Box position='fixed' left='50%' top='50%' transform='translate(-50%, -50%)'>
                    <VStack direction={['row', 'column']}>
                    <Video src={require('../../../videos/empty_list.mp4')} />
                        <Text fontSize='2xl'>List is empty...</Text>
                    </VStack>
                </Box>
            }
        </Box>
    )
}

export default Saved