import React, { createContext, ReactNode, useCallback, useEffect, useLayoutEffect, useState } from 'react';

type ContextValue = {

};


type UserInfo = {

}

const userInitial: UserInfo = {

}

//Inicialização do Contexto de Autenticação
const UserContext = createContext<ContextValue | any>(void 0);

// Inicialização do Provedor de Contexto
const UserContextProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState(userInitial)


    return (
        <UserContext.Provider value={{
            // 
        }}>
            { children}
        </UserContext.Provider>

}

export { UserContext, UserContextProvider }