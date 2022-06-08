import React from 'react';
import { useToast, UseToastOptions, Button, Box } from '@chakra-ui/react';
import { TData } from './itemTypes';
import { useSaved, useSavedUpdate } from '../../../contexts/SavedContext';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

const ItemControls = ({data}: {data: TData}): JSX.Element => {

    //* saved
    const saved = useSaved()
    const setSaved = useSavedUpdate()

    //* toasts
    const toast = useToast()

    const defaultToastOptions: UseToastOptions = {
        duration: 1000,
        isClosable: false,
        position: 'bottom'
    }

    const savedToast: UseToastOptions = {
        title: 'Item was saved successfully!',
        description: 'Item was added to saved.',
        status: 'success',
        ...defaultToastOptions
    }

    const deletedToast: UseToastOptions = {
        title: 'Item was deleted successfully!',
        description: 'Item was deleted from saved.',
        status: 'info',
        ...defaultToastOptions
    }

    //* get item state
    const getItemState = (data: TData): 'saved' | 'not saved' => saved.filter(el => el.id === data.id).length > 0 ? 'saved' : 'not saved'

    //* add to saved
    const addToSaved = (data: TData) => () => {
        setSaved([...saved, data])
        toast(savedToast)
    }

    //* delete from saved
    const deleteFromSaved = (data: TData) => () => {
       setSaved(saved.filter(el => el.id !== data.id))
       toast(deletedToast)
    }

    return (
        <Box p='4% 2% 2% 2%'>
        {
            getItemState(data) === 'not saved' ? <Button w='95%' onClick={addToSaved(data)}><AddIcon w={3} h={3} /></Button>
            :
            <Button w='95%' onClick={deleteFromSaved(data)}><DeleteIcon w='3' h='3' /></Button>
        }
        </Box>
    )
}

export default ItemControls