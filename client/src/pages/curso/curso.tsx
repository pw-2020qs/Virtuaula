import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Sidebar } from './sidebar'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import './curso.css'

type CursoState = {
    cursoId: string;
    cursoNome: string,
    listaAtividades: string[],
    listaAtiva: boolean
};
type CursoProps = {};

export default class Curso extends Component<CursoProps & RouteComponentProps<{ cursoId: string }>, CursoState> {
    constructor(props: any) {
        super(props);
        const { cursoId } = this.props.match.params;
        console.log('cursoId', cursoId)
        this.state = {
            cursoId: cursoId,
            cursoNome: "",
            listaAtividades: [],
            listaAtiva: false
        }
        this.loadCursoInfo = this.loadCursoInfo.bind(this);
        this.handleCursoInfo = this.handleCursoInfo.bind(this);
        this.showAtividade = this.showAtividade.bind(this);
    }

    // Espera a página carregar para carregar informações
    componentDidMount() {
        this.loadCursoInfo();
    }

    // Mostra a lista de atividades
    showAtividade() {
        this.state.listaAtiva ? this.setState({ listaAtiva: false })
            :
            this.setState({ listaAtiva: true })
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
    handleCursoInfo(data: { cursoNome: string, listaAtividades: string[] }) {
        this.setState({
            cursoNome: data.cursoNome,
            listaAtividades: data.listaAtividades
        })
        console.log('Curso:',data.listaAtividades)

    }

    render() {
        const width = window.innerWidth / 2.5;
        const height = window.innerHeight * 0.75;
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

                    <Sidebar
                        showAtividade={this.showAtividade}
                        listaAtividades={this.state.listaAtividades}
                        listaAtiva={this.state.listaAtiva}
                        cursoNome={this.state.cursoNome}
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

}