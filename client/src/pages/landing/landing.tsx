import { relative } from 'path';
import React from 'react';
import { Header_landing as Header } from '../../components/Header_landing/Header_landing';
import logo from './logo512.jpeg'

class Landing extends React.Component {

    render() {
        return (
        <div style={{backgroundColor: "#fceca3", height: "100vh", overflow: "hidden"}}>

            <Header />
            <main className="align-middle" style={{textAlign: "center"}}>

                <img src={logo} alt=""/>
            </main>

            <footer className="static fixed-bottom w-100 p-2 mt-3" style={{backgroundColor: "#57194c"}}>

            </footer>

            

        </div>
                
        )
    }

}



export default Landing;