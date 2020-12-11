import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Sidebar } from './sidebar'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import './curso.css'
import useAuth from '../../hooks/useAuth';



const Curso = (props: any) => {
    const { cursoId } = props.match.params;
    const [cursoNome, setCursoNome] = useState<string>('')
    const [listaAtividades, setListaAtividades] = useState<string[]>([])
    const [listaAtiva, setListaAtiva] = useState<boolean>(false)
    const { token } = useAuth()


    // Mostra a lista de atividades
    const showAtividade = () => {
        listaAtiva ? setListaAtiva(false)
            :
            setListaAtiva(true)
    }

    //Busca informações do curso no banco de dados
    const loadCursoInfo = async () => {
        await fetch(`/api/infocurso?id=${cursoId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then(async response => {

            return await response.json();
        })
            .then(async responseJson => {

                handleCursoInfo(responseJson);

            })
            .catch(err => {

                console.log('Erro ao caregar informações do curso', err);
            })
    }

    // Espera a página carregar para carregar informações
    useEffect(() => {
        loadCursoInfo()
    },[])


    //Processa informações do curso
    const handleCursoInfo = (data: { cursoNome: string, listaAtividades: string[] }) => {

        setCursoNome(data.cursoNome)
        setListaAtividades(data.listaAtividades)


    }

    const width = window.innerWidth / 2.5;
    const height = window.innerHeight * 0.75;
    const wrapper = {
        backgroundColor: "#fceca3",
        display: 'flex',
        width: '100%',
        alignItems: 'stretch'
    }

    return (
        <div className="page" id='curso-wrapper' >
            <Header />
            <div className="d-flex" style={wrapper}>
                {/* <!-- Sidebar --> */}

                <Sidebar
                    showAtividade={showAtividade}
                    listaAtividades={listaAtividades}
                    listaAtiva={listaAtiva}
                    cursoNome={cursoNome}
                />

                <div className='p-4 mr-5'>

                    {/* Calendario */}
                    <InfiniteCalendar
                        width={width}
                        height={height}
                        theme=
                        {{
                            headerColor: '#f7914D',
                            selectionColor: '#f7914D',
                            weekdayColor: '#f7914D',
                            floatingNav: {
                                background: '#fceca3',
                            }
                        }}
                    />
                </div>
            </div>
        </div >
    )
}

export default Curso;

