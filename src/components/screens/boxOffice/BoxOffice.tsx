import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import useFetch from '../../../hooks/useFetch';
import { TBoxOfficeItems } from './boxOfficeTypes';
import ServerErr from '../../shared/serverErr/ServerErr';
import useInput from '../../../hooks/useInput';
import { filterByTitle } from '../../../functions';
import ItemList from '../../shared/itemList/ItemList';
import CenteredLoader from '../../shared/loader/CenteredLoader';
import ScrollToTopBtn from '../../shared/scrollToTop/ScrollToTopBtn';

const BoxOffice = (): JSX.Element => {
    const [title, Input] = useInput()

    //* fetching box office
    const apiKey = process.env.REACT_APP_API_KEY

    const { data, error } = useFetch<TBoxOfficeItems>(`https://imdb-api.com/API/BoxOffice/${apiKey}`)

    return (
        <Box w='100%' p='1%' marginTop={['18%', '10%', '5%']}>
            {
                data ? <Box>
                    <VStack spacing='2%' p='2% 2% 0 2%'>
                        <Heading size='xl'>Films or TVs in box office</Heading>
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

export default BoxOffice