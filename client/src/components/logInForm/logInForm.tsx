import React, { useState, useEffect, } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'








const LogInForm = () => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logInError, setLoginError] = useState("");
    const { signIn, isAuth } = useAuth();



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        try {
            await signIn(email, password)
        }
        catch (err) {
            setLoginError(err);
        }
    };



    useEffect(() => {
        if (logInError)
            alert(logInError);
        setLoginError("");
    }, [logInError])


    useEffect(() => {
        console.log(`isAuth mudou é ${isAuth ? 'true' : 'false'}`)
        if (isAuth)
            return history.push("/dashboard");
    }, [isAuth, history])

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
