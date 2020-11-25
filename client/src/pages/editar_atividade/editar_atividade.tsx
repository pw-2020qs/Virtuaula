import React from 'react'
import  Header  from '../../components/Header/Header'
import './editar_atividade.css'

import {Questao, TipoQuestao} from './../../components/Questao/Questao'
import {TipoAtividade} from './../../components/Atividade/Atividade'

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


export default class EditarAtividade extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='container'>
                    <div className='row'>
                    <div className='col-md-7 question-editor'>
                        <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder='Enunciado'></textarea>
                        <input className="form-control" type="text" placeholder="Alternativa"></input>
                        <input className="form-control" type="text" placeholder="Alternativa"></input>
                        <input className="form-control" type="text" placeholder="Alternativa"></input>
                        <input className="form-control" type="text" placeholder="Alternativa"></input>

                        <button type="submit" className="btn btn-secondary">Aceitar</button>
                        <button type="submit" className="btn btn-secondary">Retornar</button>
                        <h5>Alternativa correta:</h5>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            
                            <button type="button" className="btn btn-secondary">1</button>
                            <button type="button" className="btn btn-secondary">2</button>
                            <button type="button" className="btn btn-secondary">3</button>
                            <button type="button" className="btn btn-secondary">4</button>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-5 atividade-view'>
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary">Adicionar questão</button>
                        <button type="submit" className="btn btn-secondary">Editar questão</button>
                    </div>
                    <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Atividade</h5>
                        {atividadeExemplo.questoes.map((questao, index) =>{
                        return(
                            <Questao 
                                enunciado={questao.enunciado}
                                alternativas={questao.alternativas}
                                alternativa_correta={questao.alternativa_correta}
                            />
                        )
                        })}
                    </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary">Retornar</button>
                        <button type="submit" className="btn btn-secondary">Salvar atividade</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

