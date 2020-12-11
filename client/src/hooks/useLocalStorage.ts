import { useState, useEffect, Dispatch, SetStateAction } from 'react'

// Erro vinculado ao ESlint, necessário fazer upgrade do REACT um ejetar o projeto
// type Response<T> = [T, Dispatch<SetStateAction<T>>]

   // Checagem após o page refresh se ha um usuário logado
function useLocalStorage<T>(key: string, initialState: T)/*: Response<T>*/ {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default useLocalStorage
