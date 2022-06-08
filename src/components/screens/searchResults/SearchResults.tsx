import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { filterByTitle } from '../../../functions';
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import ItemList from '../../shared/itemList/ItemList';
import CenteredLoader from '../../shared/loader/CenteredLoader';
import ScrollToTopBtn from '../../shared/scrollToTop/ScrollToTopBtn';
import ServerErr from '../../shared/serverErr/ServerErr';
import { TResults } from './SearchResultTypes';
import Alert from '../../shared/alert/Alert';
import { apiKey } from '../../../constants';

const SearchResults = (): JSX.Element => {
    const [title, Input] = useInput()

    //* search params
    const url = document.URL
    const searchParams = url.slice(url.indexOf('?')+1).replaceAll('%2C', ',')

    //* fetching with params
    const { data, error } = useFetch<TResults>(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?${searchParams}`)

    return (
        <Box w='100%' p='1%' marginTop={['18%', '10%', '5%']}>
            {
                data ? data.results.length > 0 ? <Box>
                <VStack spacing='2%' p='2% 2% 0 2%'>
                    <Heading size='xl'>Some films or Tvs which will be soon</Heading>
                    {
                        data.results.length > 7 && Input
                    }
                </VStack>
                <ItemList items={data.results.length > 7 ? filterByTitle(data.results, title) : data.results} />
                {
                    data.results.length > 7 && <ScrollToTopBtn />
                }
            </Box>
            :
            <Alert status='info' title='No results were found...' description='Please, check correctness of the selected values and try again.' />
            :
            error ? <ServerErr title={error.name} description={error.message} />
            :
            <CenteredLoader />
            }
        </Box>
    )
}

export default SearchResults