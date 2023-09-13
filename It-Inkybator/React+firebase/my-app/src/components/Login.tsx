import React from 'react';
import {useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

import {setUser} from 'store/slices/userSlice'

import {Form} from "./Form";
import {useAppDispatch} from "../hooks/redux-hooks";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
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
        <Form title='sign in' handleClick={handleLogin}/>
    );
};

export {Login};