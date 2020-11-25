import React from 'react';
import { Link } from 'react-router-dom';


type AtividadesInfo = {
    listaAtividades: string[]
}


const ListaAtividades = ({ listaAtividades }: AtividadesInfo) => {


    return (
        <div>
            {listaAtividades.map(atividade => (<>
                <Link to="/atividade" key={atividade} className="list-group-item list-group-item-action mb-2">
                <i className="fas fa-edit mr-2"></i>{atividade}
                </Link>
            </>))}
        </div>
    )

}

export default ListaAtividades;