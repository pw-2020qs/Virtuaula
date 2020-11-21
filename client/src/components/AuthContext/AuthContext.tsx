import { type } from 'os';
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

React.createContext<ContextValue | undefined>(void 0);

type Props = {
    children: ReactNode
}

function AuthProvider(props: Props) {
    const {children} = props;
    const [isAuth, setIsAuth] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] =useState<string>("");
    let values = {
        isAuth,
        email,
        username
    }
    return <AuthContext.Provider
        value={values}>{children}
    </AuthContext.Provider>;
}

const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer }
