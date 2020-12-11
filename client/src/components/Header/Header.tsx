import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_small.png'
import useAuth from '../../hooks/useAuth';
import './Header.css'

export default function Header() {
    const { signOut } = useAuth();
    const userName = 'teste'
    // const {name} = useUserContext();
    

    return (
        <nav className="navbar navbar-expand bg-light navbar-light pb-0 pt-0 margin shadow-sm" id="header">
            <div className="h-100 overflow-hidden navbar-brand h-100" >
               <Link to="/"> <img className="h-100" src={logo} alt="" /> </Link>
            </div>
            <div className="collapse navbar-collapse d-flex justify-content-between ">
                <div className="nav-item dropdown">
                    <div className="nav-link  dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cursos
                    </div>
                    {/* Cursos */}
                </div>
                <div className="nav-item btn-group">
                    <Link to="/dashboard" type="button" className="btn">{userName}</Link>
                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to={`/perfil`}>Configurações</Link>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" onClick={signOut}>Sair</button>
                    </div>
                </div>


                
            </div >
        </nav >
    )
}