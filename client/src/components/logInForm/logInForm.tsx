import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';

type user = {
    email: string,
    password: string
    name: string,
}

type LogInFormProps = {
    handleSuccessfulAuth: (data: user) => void
}

type LogInFormState = {
    email: string,
    password: string,
    loginError: string
}




function LogInForm(props: LogInFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [LogInError, setLigInError] = useState('');
    let { login, isAuth, logout } = useContext(AuthContext);

    const handleSignIn = useCallback(() => {
        login(true);
    }, [login]);

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('Estou no LoginForm')
        e.preventDefault();

        await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then(async response => response.json()
        )
            .then(async response => {
                await login(true);
                handleSignIn();
                props.handleSuccessfulAuth(await response)
            }
            )
            .catch(err => {
                console.log("Erro de Login", err);
            })

        console.log('Autenticação é ', isAuth)



    };



    return (
        <form onSubmit={HandleSubmit}>
            <label
                htmlFor="access-email">
                Email
            </label><br />

            <input
                type="email"
                name="email"
                id="acess-email"
                value={email}
                onChange={e => setEmail(e.target.value)} /> <br />

            <label
                className="mt-2"
                htmlFor="pass">
                Senha:
            </label> <br />

            <input
                type="password"
                id="pass"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required />

            <div className="row">
                <div className="col-4">
                    <input
                        className="mt-2 btn btn-primary"
                        type="submit"
                        value="Acessar" />

                </div>
                <span className="pl-4 col-8">Primeiro acesso? <br />
                    <Link to="./logIn/Cadastro">Crie sua conta.</Link>
                </span>
            </div>
        </form>
    )

};

export default LogInForm;
