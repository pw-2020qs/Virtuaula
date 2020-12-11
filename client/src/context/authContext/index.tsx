import React, { createContext, useEffect } from 'react';
import useSessionStorage from '../../hooks/useSessionStorage';
import { KEY_STORAGE_LOGIN } from '../../constants/storage';


type UserInfo = {
    email: string,
    perfil: string,
    institution: string,
    userName: string,
    secondName: string
}
type AuthUser = {
    user: UserInfo
    token: string
}

const userInitial: AuthUser = {
    user: {
        email: '',
        perfil: '',
        institution: '',
        userName: '',
        secondName: '',
    },
    token: ''
}

type ContextValue = AuthUser & {
    isAuth: boolean,
    signOut: any,
    signIn: any,
    signOn: any,
}


//Inicialização do Contexto de Autenticação
const AuthContext = createContext<ContextValue>({} as ContextValue);

//Inicialização do ContextoProvider de Autenticação
const AuthProvider: React.FC = ({ children }) => {

    const [login, setlogin] = useSessionStorage<AuthUser>(KEY_STORAGE_LOGIN, userInitial);


    // Validação do Token
    const validadeToken = () => {

    }

    //Checagem Automatica da Validade do Token
    useEffect(() => {
        if (login?.token != '')
            validadeToken()
    }, [login, setlogin])


    //Login do Usuário
    const signIn = (email: string, password: string) => {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then(response => response.json()
        )
            .then(async ResponseJson => {
                setlogin(ResponseJson)
            })
            .catch(err => {
                throw err
            })
    };

    // Cadastro do Usuário
    const signOn = async (newUser: any) => {

        await fetch('/api/login/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        }).then(response => response.json()
        )
            .then(async ResponseJson => {
                setlogin(ResponseJson)
            })
            .catch(err => {
                console.log("Erro de Login", err.status);
                alert(err.message)
            })
    }

    //Logoff do usuário
    const signOut = () => {
        setlogin(userInitial)
    };


    return (
        <AuthContext.Provider value={{
            isAuth: login?.token ? true : false,
            token: login?.token,
            signIn,
            signOut,
            signOn,
            user: login.user
        }}>
            { children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider }