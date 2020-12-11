import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import './perfil.css'

export default function Perfil() {
    const { user } = useAuth();
    const { email,
        perfil,
        institution,
        userName,
        secondName } = user
    const currentTime = new Date();
    const today = currentTime.toString()
    return (
        <div className='page'>
            <div className="h-100" id="perfil">
                <Header />
                <div className='d-flex'>
                    <div className=' ml-2 w-100 h-2'>
                        <div className="m-3 mr-4 pl-4 p-2 border bg-light">
                            <h1>{userName}</h1>
                            <span>Perfil</span>
                        </div>
                        <div className='row justify-content-center m-2'>
                            <div className='col m-2 p-2 pl-4 border bg-light'>
                                <h3>Detalhes do Usuário</h3>
                                <dl>
                                    <dt>Nome</dt>
                                    <dd>{`${userName} ${secondName}`}</dd>
                                    <dt>login</dt>
                                    <dd>{email}</dd>
                                    <dt>Endereço de email</dt>
                                    <dd>{email}</dd>
                                    {/* {perfil === 'Aluno' ? <><dt>RA</dt> <dd>12043417</dd>
                                    </> : <><dt>Registro</dt> <dd>263527</dd></>} */}
                                    <dt>Perfil</dt>
                                    <dd>{perfil}</dd>
                                </dl>
                            </div>
                            <div className='col'>
                                <div className='mb-2 mt-2 pl-4 p-2 border bg-light'>
                                    <h3>Atividade</h3>
                                    <dl>
                                        <dt>Primeiro acesso ao site</dt>
                                        <dd>Tue Sep 22 2020 10:46:25 GMT-0300 (Horário Padrão de Brasília)</dd>
                                    </dl>
                                    <dl>
                                        <dt>Ultimo acesso ao site</dt>
                                        <dd>{today}</dd>
                                    </dl>
                                </div>
                                <div className='mb-2 mt-2 pl-4 p-2 border bg-light'>
                                    <h3>Detalhes dos cursos</h3>
                                    <dl>
                                        <dt>Cursos Inscritos</dt>
                                        <Link to='curso/programacaoweb'><dd>Programação Web</dd></Link>
                                        <Link to='curso/teoriagrafos'><dd>Teoria dos grafos</dd></Link>
                                        <Link to='curso/compiladores'><dd>Compiladores</dd></Link>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
