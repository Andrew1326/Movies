import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { TComingSoonItems } from './comingSoonTypes';
import { Box, Heading, VStack } from '@chakra-ui/react';
import ServerErr from '../../shared/serverErr/ServerErr';
import useInput from '../../../hooks/useInput';
import { filterByTitle } from '../../../functions';
import ItemList from '../../shared/itemList/ItemList';
import CenteredLoader from '../../shared/loader/CenteredLoader';
import ScrollToTopBtn from '../../shared/scrollToTop/ScrollToTopBtn';
import { apiKey } from '../../../constants';

const ComingSoon = (): JSX.Element => {
    const [title, Input] = useInput()
    
    //* fetching coming soon
    const { data, error } = useFetch<TComingSoonItems>(`https://imdb-api.com/API/ComingSoon/${apiKey}`)

    return (
        <Box w='100%' p='1%' marginTop={['18%', '10%', '5%']}>
            {
                data ? <Box>
                <VStack spacing='2%' p='2% 2% 0 2%'>
                    <Heading size='xl'>Some films or TVs which will be soon</Heading>
                    {
                        data.items.length > 7 && Input
                    }
                </VStack>
                <ItemList items={data.items.length > 7 ? filterByTitle(data.items, title) : data.items} />
                {
                    data.items.length > 7 && <ScrollToTopBtn />
                }
                </Box>
                :
                error ? <ServerErr title={error.name} description={error.message} />
                :
                <CenteredLoader />
            }
        </Box>
    )
}

export default ComingSoon