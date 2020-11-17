import React from 'react';
import { Link } from 'react-router-dom';
import './Header_landing.css';
import logo from './logo_small.png';

export  function Header_landing() {
    return (
        <nav className="navbar navbar-expand-lg  bg-light navbar-light pb-0 pt-0 margin" style={{height:"2.8rem"}}>
            <div className="h-100 overflow-hidden navbar-brand h-100" >
                <img className="h-100"  src={logo} alt=""/>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between " id="navbarNavAltMarkup">
                <div className="nav-item navbar-nav">

                    
                    <a className="nav-item nav-link " href="#">Sobre</a>
                    <a className="nav-item nav-link" href="#">Universidade</a>
                </div >
                <div className="nav-item navbar-nav">

                    <a className="nav-item nav-link" href="#">Contato</a>
                    <Link className="nav-item nav-link" to={'./logIn'}>Entrar</Link>
                </div>
            </div>
        </nav>
    )
}

