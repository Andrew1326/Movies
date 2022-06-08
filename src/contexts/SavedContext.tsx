import React, { createContext, useContext } from 'react';
import { TItem } from '../appTypes';
import useLocalStorage from '../hooks/useLocalStorage';

//* creating contexts
const SavedContext = createContext<TItem[]>([])
const SavedUpdateContext = createContext<any>(null)

//* hooks
export const useSaved = () => useContext(SavedContext)
export const useSavedUpdate = () => useContext(SavedUpdateContext)

//* provider
const SavedProvider = ({children}: {children: JSX.Element[]}): JSX.Element => {
    const [saved, setSaved] = useLocalStorage('saved', [])

    return (
        <SavedContext.Provider value={saved}>
            <SavedUpdateContext.Provider value={setSaved}>
                {children}
            </SavedUpdateContext.Provider>
        </SavedContext.Provider>
    )
}

export default SavedProvider