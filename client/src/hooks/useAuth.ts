import { useContext } from "react";
import  AuthContext  from "../context/AuthContext/AuthContext";

const useAuth = () => {

    let auth = useContext(AuthContext);
    return auth;
}

export default useAuth;