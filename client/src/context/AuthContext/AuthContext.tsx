import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
// import useSessionStorage from '../../hooks/useSessionStorage';


type ContextValue = {
    isAuth: boolean,
    setIsAuth: any,
    user: {},
    signIn: any,
    signOut: any,
};
type Props = {
    children: ReactNode
}


//Inicialização do Contexto de Autenticação
export const AuthContext =

    createContext<ContextValue | any>(void 0);



export const AuthProvider = ({ children }: Props) => {


    const [user, setUser] = useState(""); 
    const [email, setEmail] = useState("");
    const [perfil, setPerfil] = useState("");
    const storageEmail = sessionStorage.getItem('@virtuaula/email');
    const storageUser = sessionStorage.getItem('@virtuaula/user');
    const storagePerfil = sessionStorage.getItem('@virtuaula/perfil');


    // Checagem após o page refresh se ha um usuário logado
    useEffect(() => {
        if (storageUser && storageEmail && storagePerfil) {
            setEmail(storageEmail);
            setUser(storageUser);
            setPerfil(storagePerfil);
        }
    },[storageUser, storageEmail, storagePerfil]);


    const signIn = useCallback( async () => {

        if (storageUser && storageEmail && storagePerfil) {
            setEmail(storageEmail);
            setUser(storageUser);
            setPerfil(storagePerfil);
        }
    }, [storageUser, storageEmail, storagePerfil]);


    const signOut = useCallback(() => {

        console.log('SignOut')

        sessionStorage.removeItem('@virtuaula/user')
        sessionStorage.removeItem('@virtuaula/email')
        sessionStorage.removeItem('@virtuaula/perfil') 

        setUser("");
        setEmail("");
        setPerfil("");
    },[storageUser, storageEmail, storagePerfil]);


    return (

        <AuthContext.Provider value={{
            isAuth: (storageUser && storageEmail )? true: false,
            user,
            email,
            perfil,
            signIn,
            signOut
        }}>
            { children}
        </AuthContext.Provider>
    )
}


export default AuthContext;
