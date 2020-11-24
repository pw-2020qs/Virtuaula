import React from 'react';

interface TipoQuestao {
    'enunciado': string,
    'alternativas': string[],
    'alternativa_correta': number // inicia em 0
}

function Questao(props: TipoQuestao){

    return (
        <div className='card'>
        <div className='card-body'>
            <p>{props.enunciado}</p>
            
            {
            props.alternativas.map((alternativa, index) =>{
                return (
                    <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='radio'
                        id={props.enunciado + '-' + index.toString()}
                        value={index}
                        name={props.enunciado}                        
                    />
                    <label className='form-check-label' htmlFor={props.enunciado + '-' + index.toString()}>
                        {alternativa}
                    </label>
                    </div>
                )}
            )}
            
        </div>
        </div>
    )
}
export {Questao}
export type {TipoQuestao}