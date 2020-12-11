import React, { createContext, useEffect } from 'react';
import useSessionStorage from '../../hooks/useSessionStorage';
import { KEY_STORAGE_LOGIN } from '../../constants/storage';

type ContextValue = {
    isAuth: boolean,
    setIsAuth: any,
    user: {},
    signIn: any,
    signOut: any,
};


type UserInfo = {
    username: string
    token: string
}

const userInitial: UserInfo = {
    username: '',
    token: ''
}

//Inicialização do Contexto de Autenticação
const AuthContext = createContext<ContextValue | any>(void 0);

const AuthProvider: React.FC = ({ children }) => {

    const [login, setlogin] = useSessionStorage<UserInfo>(KEY_STORAGE_LOGIN, userInitial);


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
        console.log('email', email)
        console.log('password', password)
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
                console.log('Resposta Json', ResponseJson)
                setlogin(ResponseJson)
            })
            .catch(err => {
                throw err
            })
    };





    // Cadastro do Usuário
    const signOn = async (newUser: any) => {


        console.log(newUser)
        await fetch('/api/login/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        }).then(response => response.json()
        )
            .then(async ResponseJson => {
                console.log('Resposta Json', ResponseJson)
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
            signOn
        }}>
            { children}
        </AuthContext.Provider>
    )
}



export { AuthContext, AuthProvider }