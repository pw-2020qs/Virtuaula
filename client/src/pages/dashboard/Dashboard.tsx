import React from 'react';
import {Card} from '../../components/Class_Card/Class_Card'
import pw from './programacao-web-icon.png'
import { Header_landing as Header } from '../../components/Header_landing/Header_landing'
export default class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <Header/>
            <div className='container p-5'>
                <div id="dashboard" className='row'>
                    <div id='cards' className='col-md-6 row'>
                    <Card title='Programação Web' imgsrc={pw}/>
                    <Card title='Programação Web' imgsrc={pw}/>
                    <Card title='Programação Web' imgsrc={pw}/>
                    <Card title='Programação Web' imgsrc={pw}/>
                    </div>
                    <div id='novos-cursos card' className='col-md-3'>
                        <div className='card-body'>
                            <button type="button" className='btn btn-primary'>+ Novos cursos</button>
                        </div>
                    </div>
                    <div id='datas'  className='col-md-3'>
                        <div className='row'>
                            <div id='calendario'></div>
                            <div id='proximos-eventos'></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}