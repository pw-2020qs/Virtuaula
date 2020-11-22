import React, {
    Context,
    ReactNode,
    useState,
    useEffect,
    useCallback,
    useMemo
} from 'react';

type ContextValue = {
    isAuth: boolean,
    email: string,
    username: string
};

export const AuthContext =

    React.createContext<ContextValue | any>(void 0);

type Props = {
    children: ReactNode
}

class AuthProvider extends React.Component {
    state = {
        isAuth: false,
        email: "",
        username: "",
    }
    constructor(props: Props) {
        super(props);


        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    login(data: boolean) {
        this.setState({ isAuth: true })
    }

    logout() {
        this.setState({ isAuth: false })
    }
    render() {
        const { children } = this.props;
        let values = {
            isAuth: this.state.isAuth,
            email: this.state.email,
            username: this.state.username,
            login: this.login,
            logout: this.logout
        }
        return <AuthContext.Provider
            value={values}>{children}
        </AuthContext.Provider>;
    }
}

const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer }
