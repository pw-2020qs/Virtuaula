import React, { createContext} from 'react'

type DataValue = {

}

const init: DataValue = {

}

type ContextValue = DataValue & {

}

//Inicialização do Contexto do user
const CursoContext = createContext<ContextValue>({} as ContextValue)

// Inicialização do Context Provider do user
const CursoProvider: React.FC = ({ children }) => {


    return (
        <CursoContext.Provider value={{

        }}>
            {children}
        </CursoContext.Provider>
    )
}

export default CursoProvider;