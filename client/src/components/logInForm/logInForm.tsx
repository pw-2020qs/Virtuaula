import React, { useState, useCallback, } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import { RouteComponentProps } from 'react-router-dom';


type user = {
    email: string,
    password: string
    user: string,
}


interface LogInFormProps {
    handleSuccessfulAuth: (data: user) => void
}

interface LogInFormProps extends RouteComponentProps {
}


const LogInForm = (props: LogInFormProps) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [logInError, setLoginError] = useState("");
    const { signIn } = useAuth();

    const handleSignIn = useCallback(() => {
        signIn();
    }, [signIn]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        fetch('/api/login', {
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
                props.handleSuccessfulAuth(await response);
                await handleSignIn();
            })
            .then(() => {
                props.history.push("/dashboard")
            })
            .catch(err => {
                console.log("Erro de Login", err);
            })
    };

    return (
        <form onSubmit={handleSubmit}>
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
    );
}


export default LogInForm;
