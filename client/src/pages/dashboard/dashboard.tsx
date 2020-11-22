import React from 'react';


export default class Dashboard extends React.Component {

    render() {

        const email = sessionStorage.getItem('@virtuaula/email')
        const password = sessionStorage.getItem('@virtuaula/password')
        const name = sessionStorage.getItem('@virtuaula/name')

        return (
            <div className="min-h-100">

                <div>email: {email}</div>
                <div>Password: {password}</div>
                <div>Nome: {name}</div>
            </div>
        )
    }

}
