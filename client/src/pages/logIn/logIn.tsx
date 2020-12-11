import React from 'react';
import logo from '../../assets/img/logo512.png';
import LogInForm from '../../components/logInForm/logInForm';


const LogIn: React.FC = () => {
    return (

        <div className="page row overflow-hidden" style={{ height: "100vh", width: "100vw" }}>
            {/* Implementação do Sidebar com botões de login */}
            <div className=" h-100 d-flex justify-content-center col-12 col-md-6 border-right shadow border-dark" style={{ backgroundColor: "#fceca3" }}>
                <div className="d-flex justify-content-center w-100">
                    <div className="container justify-content-center align-self-center">
                        <div className="row w-75 mr-auto ml-auto mt-5">
                            <div className="ml-0 btn btn-primary btn-google text-uppercase btn-outline">
                                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="logo do google" /> Entrar com Google
                            </div>
                        </div>
                        <div className="row w-75 mr-auto ml-auto mt-5">
                            <LogInForm/>
                        </div>
                    </div>
                </div> <br />
            </div>
            {/* */}
            <div className='bg col h-100 w-50' style={{ backgroundImage: `url(${logo})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "60%" }}>
            </div>
        </div>

    )

}

export default LogIn;
