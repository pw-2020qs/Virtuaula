import React from 'react';
import { Link } from 'react-router-dom';


type LogInFormProps = {
    email: string,
    password: string,
    loginError: string
}



class LogInForm extends React.Component<{}, {email: string,password: string,loginError: string}> {

    constructor(props: LogInFormProps) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginError: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, password } = this.state;

        await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then(async response => {
            this.props.handleSuccessfulAuth(await response.text())
        })
            .catch(err => {
                console.log("Erro de Login", err);
            })
    };



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label
                    htmlFor="access-email">
                    Email
                </label><br />

                <input
                    type="email"
                    name="email"
                    id="acess-email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })} /> <br />

                <label
                    className="mt-2"
                    htmlFor="pass">
                    Senha:
                </label> <br />

                <input
                    type="password"
                    id="pass"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
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
    }
}

export default LogInForm;