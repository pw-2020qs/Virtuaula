import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ListaAtividades from '../../components/ListaAtividade/listaAtividade'

type CursoState = {
    cursoId: string;
    listaAtividade: string[],

};
type CursoProps = {};

export default class Curso extends Component<CursoProps & RouteComponentProps<{ cursoId: string }>, CursoState> {
    constructor(props: any) {
        super(props);
        const { cursoId } = this.props.match.params;
        this.state = {
            cursoId: cursoId,
            listaAtividade: []
        }

        this.loadCursoInfo = this.loadCursoInfo.bind(this);
    }


    async componentDidMount() {
        await window.addEventListener('load', () => { this.loadCursoInfo() })
    }


    loadCursoInfo = async () => {
        let cursoId = this.state.cursoId;
        await fetch(`/api/infocurso?numero=${cursoId}`).then(async response => {

            return await response.json();
        })
            .then(async responseJson => {

                this.handleCursoInfo(responseJson.listaAtividade);
            })
            .catch(err => {

                console.log('Erro ao caregar informações do curso', err);
            })
    }

    handleCursoInfo(data: string[]) {

        this.setState({
            listaAtividade: data
        })
    }


    render() {

        return (
            <div>
                <h1>Curso</h1>
                <ListaAtividades listaAtividade={this.state.listaAtividade} />
            </div>
        )
    }

}