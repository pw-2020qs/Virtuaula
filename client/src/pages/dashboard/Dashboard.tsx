import React from 'react';
import {Card} from '../../components/Class_Card/Class_Card'

export default class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <div id="dashboard">
                    <div id='cards'>

                    </div>
                    <div id='novos-cursos'>

                    </div>
                    <div id='datas'>
                        <div id='calendario'></div>
                        <div id='proximos-eventos'></div>
                    </div>
                </div>
            </div>
        )
    }
}