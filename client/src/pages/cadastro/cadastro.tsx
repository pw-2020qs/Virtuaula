import React from 'react';
import logo from '../../assets/img/logo512.png';
import CadastroForm from '../../components/CadastroForm/CadastroForm'
import { RouteComponentProps } from 'react-router-dom';

interface CadastroProps extends RouteComponentProps<any> {
}



export default class Cadastro extends React.Component<CadastroProps, {}>  {
    constructor(props: CadastroProps) {
        super(props);

        this.handleSuccessfulRegister = this.handleSuccessfulRegister.bind(this);
    }

    handleSuccessfulRegister(data: string) {
        this.props.history.push("/login");
    }


    render() {
        return (
            <div className="row overflow-lg-hidden" style={{ height: "100vh", width: "100vw" }}>
                {/* Implementação do Sidebar com botões de login */}
                <div className="w-100 h-lg-100 d-flex justify-content-center col-12 col-md-6 border shadow border-dark" style={{ height: "max-content", backgroundColor: "#fceca3" }}>
                    <div className="d-flex justify-content-center w-100">

                        <CadastroForm handleSuccessfulRegister={this.handleSuccessfulRegister} />

                    </div>
                </div>
                {/* */}

                <div className='bg col h-100 w-50' style={{ backgroundImage: `url(${logo})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "60%" }}>
                </div>
            </div>
        )
    }
}
