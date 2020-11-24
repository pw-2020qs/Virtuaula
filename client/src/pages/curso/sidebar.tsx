import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {


    return (
        <div className="container-fluid" style={{}}>
            <div className="row">
                <nav className="col-md-5 d-none d-md-block bg-light sidebar border" style={{height: '100vh' }}>
                    <div className="ml-auto mr-auto sidebar-sticky d-flex flex-column h-75">
                        <div className="mt-auto ">
                            <Link to="/" className="btn btn-secondary " type="button" >
                            <i className=" mr-2 fas fa-plus-circle"></i>Iniciar Aula
                            </Link>
                        </div>
                        <div className="mt-auto">
                            <Link to="/" className="btn btn-secondary" type="button"  >
                            <i className=" mr-2 fas fa-plus-circle"></i>Nova Lousa
                            </Link>
                        </div>

                        <div className="mt-auto ">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Atividades
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="/">Nova Atividade</Link>
                                <Link className="dropdown-item" to="/">Editar Atividade</Link>
                                <Link className="dropdown-item" to="/">Deletar atividade</Link>
                            </div>
                        </div>

                    </div>
                </nav>

            </div>
        </div>
    )
}