import React from 'react';

type  AtividadesInfo = {
    listaAtividade: string[]
}


const ListaAtividades = ({listaAtividade}:AtividadesInfo) => {


    return (
        <div>
            {
                listaAtividade.map(atividade => <p key={atividade}>{atividade} <br /> </p>)
            }
        </div>
    )

}

export default ListaAtividades;