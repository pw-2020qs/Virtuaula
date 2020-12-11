import React, {  } from 'react';
import ListaAtividades from '../../components/ListaAtividade/listaAtividade';

type CursoProps = {
    listaAtividades: string[],
};


export default function SidebarAtividades(props: CursoProps) {

    return (
        <>
            <ListaAtividades listaAtividades={props.listaAtividades} />
        </>
    );
}