import React from 'react';
import logo from '../../assets/img/logo512.png';
import LogInForm from '../../components/logInForm/logInForm';
import { RouteComponentProps } from 'react-router-dom';


interface LogInProps extends RouteComponentProps {
} 

type user = {
    email: string,
    password: string
    user: string,
  }

export default class LogIn extends React.Component<LogInProps,{}> {
    constructor(props: LogInProps) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.setUser = this.setUser.bind(this);
    }


    setUser = (user: user) => {
        sessionStorage.setItem('@virtuaula/email', user.email);
        sessionStorage.setItem('@virtuaula/user', user.user);
      }

    handleSuccessfulAuth(data: user) {
        this.setUser(data);
    }


    render() {
        return (

            <div className="row overflow-hidden" style={{ height: "100vh", width: "100vw" }}>

                {/* Implementação do Sidebar com botões de login */}
                <div className=" h-100 d-flex justify-content-center col-12 col-md-6 border-right shadow border-dark" style={{ backgroundColor: "#fceca3" }}>
                    <div className="d-flex justify-content-center w-100">
                        <div className="container justify-content-center align-self-center">
                            <div className="row w-75 mr-auto ml-auto mt-5">
                                <div className="ml-0 btn btn-primary btn-google text-uppercase btn-outline">
                                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="logo do google"/> Entrar com Google
                            </div>
                            </div>
                            <div className="row w-75 mr-auto ml-auto mt-5">
                                <LogInForm handleSuccessfulAuth={this.handleSuccessfulAuth} {...this.props} />
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
}

