import React from 'react';
import logo from './logo512.png';

export default class LogIn extends React.Component {

    render() {
        return (
            <div className="row overflow-hidden" style={{ height: "100vh", width: "100vw" }}>
                {/* Implementação do Sidebar com botões de login */}
                <div className="w-100 h-100 d-flex justify-content-center col-12 col-md-6 border-right shadow border-dark" style={{ backgroundColor: "#fceca3" }}>
                    <div className="d-flex justify-content-center w-100">
                        <form className="container" action="">
                            <div className="form-group mt-3">
                                <label htmlFor="inputNome">Nome</label>
                                <input type="text" name="inputName" className="form-control" id="inputNome" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="inputSobrenome">Sobrenome</label>
                                <input type="text" name="inputSobrenome" className="form-control" id="inputSobrenome" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="inputEmail">Email</label> <br />
                                <input className="w-100" type="email" name="inputEmail" id="inputEmail" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="inputPerfil">Perfil</label>
                                <select className="form-control" id="inputPerfil" name="inputPerfil">
                                    <option>Aluno</option>
                                    <option>Professor</option>
                                </select>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="inputUni">Instituição</label>
                                <input list="uniList" className="form-control" id="inputUni" name="inputUni" />
                                <datalist id="uniList">
                                    <option value="UFABC">UFABC - Universidade Federal do ABC</option>
                                    <option value="USP">USP - Universidade de São Paulo</option>
                                </datalist>
                            </div>
                            <div className="w-75  ml-auto mr-auto row mt-5 bg-dark" style={{ height: "1px" }}>
                            </div>
                            <div className="row mt-3 mt-md-5 ml-auto mr-auto form-group align-items-center">
                                <div className="col-4 col-md-3">
                                    <button type="submit" className="btn btn-primary mb-2">Acessar</button>
                                </div>
                                <div className="col-8 mr-0 col-md-9">
                                    <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                                    <label className="form-check-label" htmlFor="inlineFormCheck">
                                        Lí e concordo com os <a href="">termos de compromisso.</a>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* */}

                <div className='bg col h-100 w-50' style={{ backgroundImage: `url(${logo})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "60%" }}>
                </div>
            </div>
        )
    }
}
