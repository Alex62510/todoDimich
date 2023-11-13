import React from 'react';
import style from './header.module.css'
import {useNavigate} from "react-router-dom";
import {Paths} from "../../Path/Path";
import {useAppDispatch} from "../../store/state";
import {removeUser} from "../../store/slaces/userSlice";
import {useAuth} from "../../hooks/useAuth";


export const Header = () => {
    const navigate = useNavigate()
    const dispath = useAppDispatch()
    const {isAuth}=useAuth()
    const logOut = () => {
        navigate(Paths.login)
        dispath(removeUser())
    }
    const HandleBasket=()=>{
      if(isAuth){
          navigate(Paths.basket)
      } else {navigate(Paths.login)}
    }
    const HandleShop=()=>{
        if(isAuth){
            navigate(Paths.shop)
        } else {navigate(Paths.login)}
    }
    return (
        <div className={style.header}>
            <button className={style.shop} onClick={HandleShop}>shop</button>
            <button className={style.basket} onClick={HandleBasket}>basket</button>
            <button className={style.logout} onClick={logOut}>logout</button>
        </div>
    );
};

