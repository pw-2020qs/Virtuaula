import React, { createContext, useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'

type DataValue = {
    perfil: string,
    institution: string,
    userName: string,
    secondName: string,
    classes: string[]
}

const init: DataValue = {
    perfil: '',
    institution: '',
    userName: '',
    secondName: '',
    classes: ['', '', '']
}

type ContextValue = {
    userInfo: DataValue
}

//Inicialização do Contexto do curso
const UserContext = createContext<ContextValue>({} as ContextValue)

// Inicialização do Context Provider do curso
const UserProvider: React.FC = ({ children }) => {

    const { token, user } = useAuth()
    const { email } = user;
    const [userInfo, setUserInfo] = useState<DataValue>(init)

    // //Busca informações do usuário no banco de dados
    const loadCursoInfo = async () => {
        await fetch(`/api/user?id=${email}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then(async response => {
            return await response.json();
        })
            .then(async responseJson => {
                // setUserInfo(responseJson);
            })
            .catch(err => {

                console.log('Erro ao caregar informações do usuário', err);
            })
    }

    // Espera a página carregar para carregar informações
    useEffect(() => {
        // loadCursoInfo()
        //informaçao Dummy
        setUserInfo({
            perfil: user.perfil,
            institution: user.institution,
            userName: user.userName,
            secondName: user.secondName,
            classes: ['programacaoweb', 'teoriagrafos', 'compiladores']
        })
    }, [user])

    return (
        <UserContext.Provider value={{
            userInfo
        }}>
            {children}
        </UserContext.Provider >
    )
}

export { UserContext, UserProvider }