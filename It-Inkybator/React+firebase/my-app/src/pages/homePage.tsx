import React from 'react';
import {Navigate} from 'react-router-dom'
import {useAuth} from 'hooks/use-auth'
import {removeUser} from 'store/slices/userSlice'
import {useAppDispatch} from "../hooks/redux-hooks";

const HomePage = () => {
    const {isAuth,email}=useAuth()
    const dispatch=useAppDispatch()
    return isAuth ? (
        <div>
            <h1>
            Welcome
        </h1>
            <button onClick={()=>{dispatch(removeUser())}}>Log out from {email}</button>
        </div>
        ) : (
        <div>
            <Navigate to='/login'/>
        </div>
    );
};

export default HomePage;