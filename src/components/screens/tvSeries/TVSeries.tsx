import { Box } from '@chakra-ui/react';
import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { TMostPopularItems, TTop250Items } from '../../../appTypes';
import { VStack, Heading } from '@chakra-ui/react';
import ServerErr from '../../shared/serverErr/ServerErr';
import { filterByTitle, shuffle, removeSameById } from '../../../functions';
import useInput from '../../../hooks/useInput';
import ItemList from '../../shared/itemList/ItemList';
import CenteredLoader from '../../shared/loader/CenteredLoader';
import ScrollToTopBtn from '../../shared/scrollToTop/ScrollToTopBtn';

const TVSeries = (): JSX.Element => {
    const [title, Input] = useInput()

    //* fetching TVs
    const apiKey = process.env.REACT_APP_API_KEY

    const { data: mostPopularTVs, error: mostPopularTVsErr } = useFetch<TMostPopularItems>(`https://imdb-api.com/API/MostPopularTVs/${apiKey}`)

    const { data: top250TVs, error: top250TVsErr } = useFetch<TTop250Items>(`https://imdb-api.com/API/Top250TVs/${apiKey}`)

    return (
        <Box w='100%' p='1%' marginTop={['18%', '10%', '5%']}>
            {
                mostPopularTVs && top250TVs ? <Box>
                    <VStack spacing='2%' p='2% 2% 0 2%'>
                        <Heading size='xl'>Big collection of TV series!</Heading>
                        {Input}
                    </VStack>
                    <ItemList items={filterByTitle(shuffle(removeSameById([...mostPopularTVs.items, ...top250TVs.items])), title)} />
                    {
                        removeSameById([...mostPopularTVs.items, ...top250TVs.items]).length > 0 && <ScrollToTopBtn />
                    }
                </Box>
                :
                mostPopularTVsErr ? <ServerErr title={mostPopularTVsErr.name} description={mostPopularTVsErr.message} />
                :
                top250TVsErr ? <ServerErr title={top250TVsErr.name} description={top250TVsErr.message} />
                :
                <CenteredLoader />
            }
        </Box>
    )
}

export default TVSeries