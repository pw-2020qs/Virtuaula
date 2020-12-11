import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth'






const CadastroForm: React.FC = () => {

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [lastName, setLastName] = useState("");
    const [perfil, setPerfil] = useState("Aluno");
    const [university, setUniversity] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [, setLoginError] = useState("");
    const { signOn } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let newUser = {
            email,
            perfil,
            university,
            userName,
            lastName,
            password
        }

        try {
            await signOn(newUser)
        }
        catch (err) {
            setLoginError(err);
        }
    };


    return (
        <form className="container" onSubmit={handleSubmit}>
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
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
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
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    value={perfil}
                    onChange={e => setPerfil(e.target.value)}>
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
                    value={university}
                    onChange={e => setUniversity(e.target.value)}
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                        value={passwordConf}
                        onChange={e => setPasswordConf(e.target.value)}
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
                        Lí e concordo com os <a href="https://www.google.com">termos de compromisso.</a>
                    </label>

                </div>
            </div>
        </form>
    )
}


export default CadastroForm;