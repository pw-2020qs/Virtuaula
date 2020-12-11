import React, { createContext } from 'react'

type DataValue = {

}

const init: DataValue = {

}

type ContextValue = DataValue & {

}

//Inicialização do Contexto do atividade
const AtividadeContext = createContext<ContextValue>({} as ContextValue)

// Inicialização do Context Provider do atividade
const AtividadeProvider: React.FC = ({ children }) => {


    return (
        <AtividadeContext.Provider value={{

        }}>
            {children}
        </AtividadeContext.Provider>
    )
}

export { AtividadeContext, AtividadeProvider };