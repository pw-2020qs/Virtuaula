import { type } from 'os';
import React from 'react';
import { render } from 'react-dom';
import {Questao, TipoQuestao} from './../Questao/Questao'

interface TipoAtividade {
    'questoes': TipoQuestao[],
    'nome': string,
    'prazo': Date
}

function Atividade(props: TipoAtividade){
    return(
        <div className='atividade'>
            {props.questoes}
        </div>

    )
}

export{Atividade}
export type{TipoAtividade}