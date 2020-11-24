import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export const Sidebar = (props: { cursoNome: string }) => {
    const [nome, setNome] = useState(props.cursoNome);

    useEffect(() => {

        console.log('antes de setNome', props)
        setNome(props.cursoNome)
        console.log('depois de setNome', props)
    }, [props])

    return (
        <div className="container-fluid " style={{}}>
            <nav className="mt-2 bd-links col-md-10 d-md-block bg-light border" style={{ height: '100vh' }}>
                <div className="ml-auto mr-auto sidebar-sticky d-flex flex-column">
                    <ul className="p-4 list-group">
                        <h2 className="m-2 mb-4">{nome}</h2>
                            <Link to="/" className="list-group-item list-group-item-action">
                                <i className=" mr-2 fas fa-plus-circle"></i>Iniciar Aula
                            </Link>

                            <Link to="/"  className="list-group-item list-group-item-action">
                                <i className=" mr-2 fas fa-plus-circle"></i>Nova Lousa
                            </Link>

                        <div className="list-group-item list-group-item-action">
                            <div className="dropdown-toggle" data-toggle="collapse" id="dropdownMenuButton" aria-controls="atividadeMenu" data-target='#atividadeMenu'>
                                Atividades
                            </div>
                            <div className="collapse multi-collapse" id="atividadeMenu" >
                                <Link className="list-group-item dropdown-item" to="/">Nova Atividade</Link>
                                <Link className="list-group-item dropdown-item" to="/">Editar Atividade</Link>
                                <Link className="list-group-item dropdown-item" to="/">Deletar atividade</Link>
                            </div>
                        </div>
                    </ul>

                </div>
            </nav>

        </div>
    )
}