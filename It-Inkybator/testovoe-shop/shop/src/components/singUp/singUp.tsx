import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {Form} from "../form/Form";
import {setUser} from "../../store/slaces/userSlice";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../Path/Path";
import {useAppDispatch} from "../../store/state";

const SingUp = () => {
    const dispath = useAppDispatch()
    const navigate = useNavigate()
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispath(setUser({id: user.uid, email: user.email, token: user.refreshToken}))
                navigate(Paths.shop)
            })
            .catch(console.log);
    }
    return (
        <Form title='register' handleClick={handleRegister}/>
    )
}
export {SingUp}