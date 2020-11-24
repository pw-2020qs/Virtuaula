import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ListaAtividades from '../../components/ListaAtividade/listaAtividade'
import { Sidebar } from './sidebar'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import './curso.css'

type CursoState = {
    cursoId: string;
    cursoNome: string,
    listaAtividade: string[],
};
type CursoProps = {};

export default class Curso extends Component<CursoProps & RouteComponentProps<{ cursoId: string }>, CursoState> {
    constructor(props: any) {
        super(props);
        const { cursoId } = this.props.match.params;
        this.state = {
            cursoId: cursoId,
            cursoNome: "",
            listaAtividade: []
        }
        this.loadCursoInfo = this.loadCursoInfo.bind(this);
        this.handleCursoInfo = this.handleCursoInfo.bind(this);
    }

    // Espera a página carregar para carregar informações
    componentDidMount() {
        this.loadCursoInfo();
    }

    //Busca informações do curso no banco de dados
    loadCursoInfo = async () => {
        let cursoId = this.state.cursoId;
        await fetch(`/api/infocurso?id=${cursoId}`).then(async response => {

            return await response.json();
        })
            .then(async responseJson => {

                this.handleCursoInfo(responseJson);
            })
            .catch(err => {

                console.log('Erro ao caregar informações do curso', err);
            })
    }


    //Processa informações do curso
    handleCursoInfo(data: {cursoNome:string, listaAtividades: string[]}) {
        this.setState({
            cursoNome: data.cursoNome,
            listaAtividade: data.listaAtividades
        })
    }

    render() {
        const width = window.innerWidth / 2.5;
        const height = window.innerHeight*0.75;
        const wrapper = {
            backgroundColor: "#fceca3",
            display: 'flex',
            width: '100%',
            alignItems: 'stretch'
        }
        return (
            <div id='curso-wrapper'>
                <Header />
                <div className="d-flex" style={wrapper}>
                    {/* <!-- Sidebar --> */}
                    <Sidebar cursoNome={this.state.cursoNome}/>
                    
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

}