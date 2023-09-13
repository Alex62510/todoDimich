import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import {Form} from "./Form";
import {setUser} from 'store/slices/userSlice'

import React from 'react';
import {useAppDispatch} from "../hooks/redux-hooks";

const SingUp = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate('/')
            })
            .catch(() => alert("invalid user"))
    }
    return (
        <Form title='register' handleClick={handleRegister}/>
    );
};

export {SingUp};