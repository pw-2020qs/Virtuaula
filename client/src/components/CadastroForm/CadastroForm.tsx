import React from 'react';
import { Link } from 'react-router-dom';
import LogIn from '../../pages/cadastro/cadastro';


type CadastroFormState = {
    name: string,
    lastName: string,
    email: string,
    profile: string,
    university: string,
    password: string,
    passwordConf: string,
    loginError: string
}

type CadastroFormProps = {
    handleSuccessfulRegister: (data: string) => void
}





class CadastroForm extends React.Component<CadastroFormProps,CadastroFormState>{

    constructor(props: CadastroFormProps) {
        super(props);
        this.state = {
            name: "",
            lastName: "",
            email: "",
            profile: "Aluno",
            university: "",
            password: "",
            passwordConf: "",
            loginError: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, lastName, email, profile, university,
            password, passwordConf } = this.state;

        await fetch('/api/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                lastName: lastName,
                email: email,
                profile: profile,
                university: university,
                password: password,
                passwordConf: passwordConf
            }),
        }).then(async response => {
            if(response.status==201){
                this.props.handleSuccessfulRegister(await response.text())
            }
            else {
                throw `${response.status}`;

            }
        })
            .catch(err => {
                console.log("Erro de Login", err);
            })
    };



    render() {

        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="form-group mt-3">

                    <label
                        htmlFor="inputNome">
                        Nome
                        </label>

                    <input
                        type="text"
                        name="inputName"
                        className="form-control"
                        id="inputNome"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        required />

                </div>
                <div className="form-group mt-3">

                    <label
                        htmlFor="inputSobrenome">
                        Sobrenome
                        </label>

                    <input
                        type="text"
                        name="inputSobrenome"
                        className="form-control"
                        id="inputSobrenome"
                        value={this.state.lastName}
                        onChange={e => this.setState({ lastName: e.target.value })}
                        required />

                </div>
                <div className="form-group mt-3">

                    <label
                        htmlFor="inputEmail">
                        Email
                        </label> <br />

                    <input
                        className="w-100"
                        type="email"
                        name="inputEmail"
                        id="inputEmail"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        required />

                </div>
                <div className="form-group mt-3">

                    <label
                        htmlFor="inputPerfil">
                        Perfil
                        </label>

                    <select
                        className="form-control"
                        id="inputPerfil"
                        name="inputPerfil"
                        value={this.state.profile}
                        onChange={e => this.setState({ profile: e.target.value })}>
                        <option>Aluno</option>
                        <option>Professor</option>
                    </select>

                </div>
                <div className="form-group mt-3">

                    <label
                        htmlFor="inputUni">
                        Instituição
                        </label>

                    <input
                        list="uniList"
                        className="form-control"
                        id="inputUni"
                        name="inputUni"
                        value={this.state.university}
                        onChange={e => this.setState({ university: e.target.value })}
                        required />

                    <datalist
                        id="uniList">
                        <option value="UFABC">UFABC - Universidade Federal do ABC</option>
                        <option value="USP">USP - Universidade de São Paulo</option>
                    </datalist>
                </div>

                <div className="form-group d-lg-flex justify-content-around mt-3">
                    <div className="block ">
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
                    </div>

                    <div className="block">

                        <label
                            className="mt-2"
                            htmlFor="pass-conf">
                            Confirmar Senha:
                    </label> <br />

                        <input
                            type="password"
                            id="pass-conf"
                            name="password-conf"
                            value={this.state.passwordConf}
                            onChange={e => this.setState({ passwordConf: e.target.value })}
                            required />
                    </div>


                </div>

                <div className="w-75  ml-auto mr-auto row mt-5 bg-dark" style={{ height: "1px" }}>
                </div>
                <div className="row mt-3 mt-md-5 ml-auto mr-auto form-group align-items-center">
                    <div className="col-4 col-md-3">

                        <button
                            type="submit"
                            className="btn btn-primary mb-2">
                            Acessar
                            </button>

                    </div>
                    <div className="col-8 mr-0 col-md-9">

                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineFormCheck" required />

                        <label
                            className="form-check-label"
                            htmlFor="inlineFormCheck" >
                            Lí e concordo com os <a href="">termos de compromisso.</a>
                        </label>

                    </div>
                </div>
            </form>
        )
    }




}

export default CadastroForm;