import React from 'react';
import logo from './logo512.png';
import { Link } from 'react-router-dom';

export default class LogIn extends React.Component {

    render() {
        return (

            <div className="row overflow-hidden" style={{ height: "100vh", width: "100vw" }}>

                {/* Implementação do Sidebar com botões de login */}
                <div className=" h-100 d-flex justify-content-center col-12 col-md-6 border-right shadow border-dark" style={{ backgroundColor: "#fceca3" }}>
                    <div className="d-flex justify-content-center w-100">
                        <div className="container justify-content-center align-self-center">
                            <div className="row w-75 mr-auto ml-auto mt-5">
                                <a className="ml-0 btn btn-primary btn-google text-uppercase btn-outline" href="#">
                                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Entrar com Google
                            </a>
                            </div>
                            <div className="row w-75 mr-auto ml-auto mt-5">
                                <form action="">
                                    <label htmlFor="access-email">Email</label><br />
                                    <input type="email" name="access-email" id="acess-email" /> <br />
                                    <label className="mt-2" htmlFor="pass">Senha:</label> <br />
                                    <input type="password" id="pass" name="password" required />
                                    <div className="row">
                                        <div className="col-4">
                                            <input className="mt-2 btn btn-primary" type="submit" value="Acessar" />
                                        </div>
                                        <span className="pl-4 col-8">Primeiro acesso? <br />
                                            <Link to="./logIn/Cadastro">Crie sua conta.</Link>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> <br />
                </div>
                {/* */}

                <div className='bg col h-100 w-50' style={{ backgroundImage: `url(${logo})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "60%" }}>
                </div>
            </div>

        )
    }
}
