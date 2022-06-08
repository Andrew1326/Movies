import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { TMostPopularItems, TTop250Items } from '../../../appTypes';
import { shuffle, removeSameById, filterByTitle } from '../../../functions';
import ServerErr from '../../shared/serverErr/ServerErr';
import useInput from '../../../hooks/useInput';
import ItemList from '../../shared/itemList/ItemList';
import CenteredLoader from '../../shared/loader/CenteredLoader';
import ScrollToTopBtn from '../../shared/scrollToTop/ScrollToTopBtn';
import { apiKey } from '../../../constants';

const Films = (): JSX.Element => {
    const [title, Input] = useInput()

    //* fetching films
    const { data: mostPopularFilms, error: mostPopularFilmsErr } = useFetch<TMostPopularItems>(`https://imdb-api.com/API/MostPopularMovies/${apiKey}`)

    const { data: top250Films, error: top250FilmsErr } = useFetch<TTop250Items>(`https://imdb-api.com/API/Top250Movies/${apiKey}`)

    return (
        <Box w='100%' p='1%' marginTop={['18%', '10%', '5%']}>
            {
                mostPopularFilms && top250Films ? <Box>
                    <VStack spacing='2%' p='2% 2% 0 2%'>
                        <Heading size='xl'>Best films for this evening here!</Heading>
                        {Input}
                    </VStack>
                    <ItemList items={filterByTitle(shuffle(removeSameById([...mostPopularFilms.items, ...top250Films.items])), title)} />
                    {
                        removeSameById([...mostPopularFilms.items, ...top250Films.items]).length > 0 && <ScrollToTopBtn />
                    }
                </Box>
                :
                mostPopularFilmsErr ? <ServerErr title={mostPopularFilmsErr.name} description={mostPopularFilmsErr.message} />
                :
                top250FilmsErr ? <ServerErr title={top250FilmsErr.name} description={top250FilmsErr.message} />
                :
                <CenteredLoader />
            }
        </Box>
    )
}

export default Films