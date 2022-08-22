import React from 'react';
import { TItem } from '../../../appTypes';
import { Flex } from '@chakra-ui/react';
import Card from '../card/Card';

const ItemList = ({items}: {items: TItem[]}): JSX.Element => {
    return (
        <Flex my={['5%', '3%', '1%']} direction='row' justifyContent='space-evenly' alignItems='center' flexWrap='wrap'>
            {
                items.map((el, i: number) => <Card key={i} item={el} />)
            }
        </Flex>
    )
}

export default ItemList