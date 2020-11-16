import React from 'react';
import logo from './logo_small.png'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg  bg-light navbar-light pb-0 pt-0 margin" style={{height:"2.8rem"}}>
            <div className="h-100 overflow-hidden navbar-brand h-100" >
                <img className="h-100"  src={logo} alt=""/>
            </div>
            <div className="collapse navbar-collapse d-flex justify-content-between ">
                <div className="nav-item dropdown">
                    <a className="nav-link  dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cursos
                        </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Configurações</a>
                        <a className="dropdown-item" href="#">...</a>
                        <a className="dropdown-item" href="#">...</a>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="../../../public/perfil.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Nome
                        </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Configurações</a>
                        <a className="dropdown-item" href="#">...</a>
                        <a className="dropdown-item" href="#">...</a>
                    </div>
                </div>
            </div>
        </nav >
    )
}