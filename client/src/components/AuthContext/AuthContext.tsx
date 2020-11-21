import React from 'react';

type AuthProps = {
    isAuth: boolean,
    email: string,
};

export const AuthContext =
    React.createContext<Partial<AuthProps>>({});

function AuthProvider() {
    let state: AuthProps = {
        isAuth: true,
        email: ""
    };
    return <AuthContext.Provider
        value={{
            isAuth: true,
            email: ""
        }}>
    </AuthContext.Provider>;
}

const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer }
