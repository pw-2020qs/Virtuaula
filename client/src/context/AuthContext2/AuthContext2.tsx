import React, { Children, createContext, ReactNode, useState  } from 'react';

export const AuthContext = createContext();

type Props = {
    children: ReactNode
}

export default function AuthProvider({children}: Props ) {
    const [isAuth, setIsAuth] = useState<Boolean>();

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}