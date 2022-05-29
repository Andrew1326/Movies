import { Box, Heading, Image } from '@chakra-ui/react';
import { TItem } from '../../../appTypes';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemControls from '../../screens/item/ItemControls';

const Card = ({item}: { item: TItem }): JSX.Element => {

    const { pathname } = useLocation()
    const navigate = useNavigate()

    //* navigate to item
    const navigateToItem = () => navigate(`${pathname}/${item.id}`)

    return (
        <Box w={['40%', '20%', '15%', '13%', '12%']} h='auto' overflow='hidden' m='1%' _hover={{cursor: 'pointer'}}>
            <Box onClick={navigateToItem}>
                <Image src={item.image} alt='film image' w='100%' h='250px' loading='lazy' />
                <Heading marginTop='4%' as='h4' size='md'>{item.title}</Heading>
            </Box>
            <ItemControls data={item} />
        </Box>
    )
}

export default Card