import React from 'react'
import {TipoAtividade} from './../../components/Atividade/Atividade'
import {Questao, TipoQuestao} from './../../components/Questao/Questao'
import { Header_landing as Header } from '../../components/Header_landing/Header_landing'

const questaoExemplo1: TipoQuestao = {
    enunciado: 'Enunciado 1',
    alternativas: ['Alternativa 1', 'Alternativa 2', 'Alternativa 3'],
    alternativa_correta: 0
}

const questaoExemplo2: TipoQuestao = {
    enunciado: 'Enunciado 2',
    alternativas: ['Alternativa 1', 'Alternativa 2', 'Alternativa 3'],
    alternativa_correta: 1
}

const atividadeExemplo: TipoAtividade = {
    questoes: [questaoExemplo1, questaoExemplo2],
    nome: 'Exemplo',
    prazo: new Date()
}

export default class Atividade extends React.Component{
    render(){
        return(
            <div className="page">
                <Header/>
                {atividadeExemplo.questoes.map((questao) =>{
                    return(
                        <Questao 
                            enunciado={questao.enunciado}
                            alternativas={questao.alternativas}
                            alternativa_correta={questao.alternativa_correta}
                        />
                    )
                })}
                <input type="button" value="Submeter"/>
            </div>
        )
    }
}