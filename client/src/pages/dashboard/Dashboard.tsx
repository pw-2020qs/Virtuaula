import React from 'react';
import {Card} from '../../components/Class_Card/Class_Card'
import pw from './programacao-web-icon.png'
import tg from './teoria-dos-grafos.png'
import  Header  from '../../components/Header/Header'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

function Event(props: any) {
    return (
        <li className='col-md-12 list-group-item'>
            <p>{props.date}: {props.eventType} - {props.course} - {props.time}</p>
            
        </li>
    )
}

export default class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <Header/>
            <div className='container p-4'>
            <div className='card'>
                <div className='card-header'>Dashboard</div>
                <div id="dashboard" className='row'>
                    <div id='cards' className='col-md-7 row'>
                    <Card title='Programação Web' id="programacaoweb" imgsrc={pw}/>
                    <Card title='Teoria dos grafos' id="teoriagrafos" imgsrc={tg}/>
                    <Card title='Compiladores' id="compiladores" imgsrc={pw}/>
                    </div>
                    <div id='novos-cursos' className='col-md-2 card' style={{backgroundColor: "#fceca3"}}>
                        <div className='card-body'>
                            <button type="button" className='btn btn-primary' style={{backgroundColor: "transparent", border:'none', color:'black'}}>Novo curso</button>
                        </div>
                    </div>
                    <div id='datas'  className='col-md-3'>
                        <div className='container'>
                            <div id='calendario' className='card'>
                                <InfiniteCalendar
                                    width={250}
                                    height={300}
                                    theme=
                                        {{
                                            headerColor: '#f7914D',
                                            selectionColor: '#f7914D',
                                            weekdayColor: '#f7914D',
                                            floatingNav: {
                                                background: '#fceca3',
                                            }
                                        }}
                                />
                            </div>
                            <div id='proximos-eventos' className='card'>
                                <div className='card-header'>Próximos eventos</div>
                                <div className='list-group list-group-flush card-body'>
                                <Event date='27/11' eventType='Aula' course='PW' time='19h'/>
                                <Event date='30/11' eventType='Prova' course='PW' time='21h'/>
                                <Event date='01/12' eventType='Aula' course='Compiladores' time='19h'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
