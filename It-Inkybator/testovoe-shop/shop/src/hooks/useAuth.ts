import {useSelector} from "react-redux";
import {RootState} from "../store/state";

export function useAuth() {
    const {id, token, email} = useSelector((state: RootState) => state.user)
    return {
        isAuth: !!id,
        email,
        token,
        id
    }
}