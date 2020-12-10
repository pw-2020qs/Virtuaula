import React, { useState, useCallback, useEffect, } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import { RouteComponentProps } from 'react-router-dom';


type user = {
    email: string,
    user: string,
    perfil: string
}

interface LogInFormProps {
    handleSuccessfulAuth: (data: user) => void
}

interface LogInFormProps extends RouteComponentProps {
}


const LogInForm = (props: LogInFormProps) => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logInError, setLoginError] = useState("");
    const { user, signOut, signIn, isAuth} = useAuth();
    

    const handleSignIn = useCallback(async () => {
        await signIn;
    }, [signIn]);


    const setUser = (user: user) => {
        sessionStorage.setItem('@virtuaula/email', user.email);
        sessionStorage.setItem('@virtuaula/user', user.user);
        sessionStorage.setItem('@virtuaula/perfil', user.perfil);
      }
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
                // props.handleSuccessfulAuth(await response);
                setUser(response);
                 handleSignIn();


            })
            .catch(err => {
                setLoginError(err);
            })
    };

    useEffect(() => {

        alert(logInError);


        setLoginError("");
    }, [logInError])


    useEffect(()=> {
        
        console.log(`isAuth mudou é ${isAuth? 'true': 'false'}`)

        if(isAuth)
            history.push("/dashboard");

    }, [isAuth])

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
