import React from 'react';
import  Header from '../../components/Header/Header'
import './lousa.css'
import ls from '../../assets/img/lousa.png'

export default class Lousa extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <main className="align-middle pads" style={{ paddingLeft:"2cm" }}>
                <img src={ls} alt=""/>
                </main>
            </div>
        )
    }
} 





