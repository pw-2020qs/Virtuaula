import { useState, useEffect, Dispatch, SetStateAction } from 'react'

// Erro vinculado ao ESlint, necessário fazer upgrade do REACT um ejetar o projeto
// type Response<T> = [T, Dispatch<SetStateAction<T>>]

   // Checagem após o page refresh se ha um usuário logado
function useSessionStorage<T>(key: string, defaultValue: T) /*: Response<T>*/ {

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