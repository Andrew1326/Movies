import { Box, Heading, Stack, Image, Text, VStack, UnorderedList, ListItem, HStack } from '@chakra-ui/react';
import deviceSrc from '../../../images/device.webp';
import Video from '../../shared/video/Video';

const Home = (): JSX.Element => {

    //* advantages
    const advantages: string[] = ['Newest films and Tvs', 'Big functionality and all is free', 'Films in good quality', 'Advanced search', 'Tracking box office option']

    return (
        <Box w='100%' p='0 4% 2% 4%' marginTop={['18%', '10%', '5%']}>
            <VStack>
                <Heading m='2% 0 0 0' as='h1' size='2xl'>Best place for finding films and it's not all!</Heading>
                <Video src={require('../../../videos/network.mp4')} />
                <Heading size='xl'>You should try this, because:</Heading>
                <Stack direction={['column', 'row']} p='0 0 8% 0'>
                    <Image src={deviceSrc} alt='device' w={['85%', '60%', '50%']} h={[350, 400, 550]}  />
                    <Box w='100%' display='flex' alignItems='center'>
                        <UnorderedList>
                            {
                                advantages.map((el, i: number) => <ListItem key={i} m='4% 0 4% 0'>
                                    <Text fontSize={['2xl', '3xl', '3xl']}>{el}</Text>
                                </ListItem>)
                            }
                        </UnorderedList>
                    </Box>
                </Stack>
                <Heading as='h2' size='xl'>Enjoy it on your favourite devices!</Heading>
                <Video src={require('../../../videos/devices.mp4')} />
                <HStack>
                    <Heading as='h2' size='xl' data-aos='fade-down'>Search films and TVs with <i>Moovie</i></Heading>
                </HStack>
                <Video src={require('../../../videos/client.mp4')} />
            </VStack>
        </Box>
    )
}

export default Home