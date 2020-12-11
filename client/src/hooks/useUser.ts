import { useContext } from 'react';
import { UserContext } from '../context/userContext/index'
const useUser = () => {

    let user = useContext(UserContext);
    return user;
}

export default useUser;