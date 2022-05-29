import { Box, FormControl, HStack, VStack, FormLabel, Input, Select, CheckboxGroup, Button, Checkbox, Flex,
Text, 
Center} from '@chakra-ui/react';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TFormValues, TParams } from './searchTypes';
import { getPossibleRating, genres, companies, countries } from './searchData';
import { useNavigate } from 'react-router-dom';
import { convertArrToParams } from '../../../functions';

const Search = (): JSX.Element => {

    const navigate = useNavigate()

    //* react-hook-form init
    const { register, handleSubmit, control, reset } = useForm<TFormValues>({
        defaultValues: {
            title: '',
            minRating: '1',
            maxRating: '10',
            genres: [],
            companies: [],
            country: '',
            plot: ''
        }
    })

    //* rating
    const rating = getPossibleRating();

    //* submit
    const onSubmit: SubmitHandler<TFormValues> = (data): void => {

        //* string params
        const params: TParams = {
            title: data.title,
            user_rating: `${data.minRating},${data.maxRating}`,
            genres: convertArrToParams(data.genres),
            companies: convertArrToParams(data.companies),
            country: data.country,
            plot: data.plot,
        }

        const onlyWithValue = Object.fromEntries(Object.entries(params).filter(el => !!el[1]))

        const searchParams = new URLSearchParams(onlyWithValue).toString()
        navigate(`/search/results?${searchParams}`)
        
        reset();
    }

    return (
        <Box w='100%' p='2% 10% 2% 10%' marginTop={['18%', '10%', '4%']}>
            <VStack>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Controller 
                name='title'
                control={control}
                render={({ field }) => <HStack>
                    <FormControl {...field}>
                        <FormLabel htmlFor='title'>Title</FormLabel>
                        <Input type='text' placeholder='Enter movie title...' textAlign='center' />
                    </FormControl>
                </HStack>}
                />
                <HStack  m='2% 0 0 0'>
                    <FormControl>
                        <FormLabel htmlFor='rating'>Rating</FormLabel>
                        <HStack>
                        <Select {...register('minRating')}>
                            {
                                rating.map((el, i) => <option key={i} value={el}>{el}</option>)
                            }
                        </Select>
                        <Text fontSize='sm'>to</Text>
                        <Select {...register('maxRating')}>
                            {
                                rating.reverse().map((el, i) => <option key={i} value={el}>{el}</option>)
                            }
                        </Select>
                        </HStack>
                    </FormControl>
                </HStack>
                <Controller 
                name='genres'
                control={control}
                render={({field: {onChange, onBlur, value, ref}}) => <Box m='2% 0 0 0'>
                    <CheckboxGroup colorScheme='green' value={value} onChange={onChange}>
                    <FormLabel htmlFor='genres'>Genres</FormLabel>
                    <Flex direction='row' flexWrap='wrap'>
                        {
                            genres.map((el, i) => <Checkbox m='0.5%' key={i} value={el} ref={ref} onBlur={onBlur}>{el}</Checkbox>)
                        }
                    </Flex>
                </CheckboxGroup>
                </Box>}
                />
                <Controller 
                name='companies'
                control={control}
                render={({field: {onChange, onBlur, value, ref}}) => <Box m='2% 0 0 0'>
                <CheckboxGroup colorScheme='green' value={value} onChange={onChange}>
                    <FormLabel htmlFor='companies'>Companies</FormLabel>
                    <Flex direction='row' flexWrap='wrap'>
                    {
                        companies.map((el, i) => <Checkbox m='0.5%' key={i} value={el} ref={ref} onBlur={onBlur}>{el}</Checkbox>)
                    }
                </Flex>
            </CheckboxGroup>
            </Box>}
                />
                <HStack m='2% 0 0 0'>
                    <FormControl>
                        <FormLabel htmlFor='country'>Country</FormLabel>
                        <Select {...register('country')}>
                            {
                                countries.map((el, i) => <option key={i} value={el.value}>{el.name}</option>)
                            }
                        </Select>
                    </FormControl>
                    <Controller 
                    name='plot'
                    control={control}
                    render={({ field }) => <FormControl {...field}>
                        <FormLabel htmlFor='plot'>Plot words</FormLabel>
                        <Input type='text' placeholder='Enter words separated by comma...' textAlign='center' />
                    </FormControl>}
                    />
                </HStack>
                <Center m='2% 0 0 0'>
                    <Button type='submit'>search films</Button>
                </Center>
                </form>
            </VStack>
        </Box>
    )
}

export default Search