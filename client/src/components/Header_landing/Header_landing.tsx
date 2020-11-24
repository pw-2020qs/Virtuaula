import React from 'react';
import { Link } from 'react-router-dom';
import './Header_landing.css';
import logo from '../../assets/img/logo_small.png'

export function Header_landing() {
    return (

        <header>
            <div className='w-100' style={{height: "2rem", backgroundColor: "#f7914D"}}></div>
            <nav className="navbar navbar-expand-lg  bg-light navbar-light pb-0 pt-0 margin shadow-sm" style={{ height: "2.8rem" }}>
                <div className="h-100 overflow-hidden navbar-brand h-100" >
                    <img className="h-100" src={logo} alt="" />
                </div>
                <div className="collapse navbar-collapse d-flex justify-content-between " id="navbarNavAltMarkup">
                    <div className="nav-item navbar-nav">


                        <div className="nav-item nav-link " >Sobre</div>
                        <div className="nav-item nav-link" >Universidade</div>
                    </div >
                    <div className="nav-item navbar-nav">

                        <div className="nav-item nav-link" >Contato</div>
                        <Link className="nav-item nav-link" to={'./logIn'}>Entrar</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

