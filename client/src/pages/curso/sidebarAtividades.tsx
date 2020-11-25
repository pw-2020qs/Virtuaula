import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListaAtividades from '../../components/ListaAtividade/listaAtividade';

type CursoProps = {
    listaAtividades: string[],
};


export default function SidebarAtividades(props: CursoProps) {

    console.log('SidebarAtividades', props.listaAtividades)
    return (
        <>
            <ListaAtividades listaAtividades={props.listaAtividades} />
        </>
    );
}