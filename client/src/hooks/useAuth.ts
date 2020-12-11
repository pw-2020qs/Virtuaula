import { useContext } from "react";
import  {AuthContext}  from "../context/authContext";

const useAuth = () => {

    let auth = useContext(AuthContext);
    return auth;
}

export default useAuth;