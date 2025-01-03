import { Navigate } from "react-router-dom";
import { useAuth } from "./auth"

export const RequiredAuth = ({children})=>{
    const auth = useAuth();

    if(!auth.user){
        return <Navigate to={'/Auth'}/>
    }
    return children;
}