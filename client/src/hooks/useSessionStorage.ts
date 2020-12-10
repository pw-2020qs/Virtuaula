import { useState, useEffect, SetStateAction, Dispatch } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function useSessionStorage<T>(key: string, defaultValue: T): Response<T> {
    const [state, setState] = useState(() => {
        const storageValue = sessionStorage.getItem(key)

        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return defaultValue
        }
    })
        useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(state))
    }, [key, state])
    return [state, setState]
}

export default useSessionStorage;