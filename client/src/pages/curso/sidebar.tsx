import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import  SidebarAtividades  from './sidebarAtividades'

type SidebarProps = {
    showAtividade: any,
    listaAtiva: boolean,
    cursoNome: string,
    listaAtividades: string[],
}


const SidebarProf = () => {

    return (
        <>
            <Link to="/" className="list-group-item list-group-item-action">
                <i className=" mr-2 fas fa-plus-circle"></i>Iniciar Aula
                            </Link>

            <Link to="/lousa" className="list-group-item list-group-item-action">
                <i className=" mr-2 fas fa-plus-circle"></i>Nova Lousa
                            </Link>

            <div className="list-group-item list-group-item-action">
                <div className="dropdown-toggle" data-toggle="collapse" id="dropdownMenuButton" aria-controls="atividadeMenu" data-target='#atividadeMenu'>
                    Atividades
                            </div>
                <div className="collapse multi-collapse" id="atividadeMenu" >
                    <Link className="list-group-item dropdown-item" to="/atividade/nova">Nova Atividade</Link>
                    <Link className="list-group-item dropdown-item" to="/atividade/nova">Editar Atividade</Link>
                    <Link className="list-group-item dropdown-item" to="/">Deletar atividade</Link>
                </div>
            </div>

        </>
    )
}

const SidebarAluno = (props: {showAtividade: any}) => {

    return (
        <>
            <Link to="/" className="list-group-item list-group-item-action">
                <i className="fas fa-video mr-2"></i>Assistir Aula
                        </Link>

            <div  onClick={props.showAtividade} className="list-group-item list-group-item-action">
                <i className="fas fa-edit mr-2"></i>Atividades
                        </div>

        </>
    )
}



export const Sidebar = (props: SidebarProps) => {
    const [nome, setNome] = useState(props.cursoNome);
    const { perfil } = useAuth();
    useEffect(() => {

        console.log('antes de setNome', props)
        setNome(props.cursoNome)
        console.log('depois de setNome', props)
    }, [props])

    return (
        <div className="container-fluid " >
            <nav className="mt-2 bd-links col-md-10 d-md-block bg-light border" style={{ height: '100vh' }}>
                <div className="ml-auto mr-auto sidebar-sticky d-flex flex-column">
                    <ul className="p-4 list-group">
                        <h2 className="m-2 mb-4">{nome}</h2>
                        {props.listaAtiva? <SidebarAtividades listaAtividades={props.listaAtividades}/> : (perfil === 'Aluno' ? <SidebarAluno showAtividade={props.showAtividade} />
                            :
                            <SidebarProf />)}
                            
                    </ul>
                </div>
            </nav>
        </div>
    )
}