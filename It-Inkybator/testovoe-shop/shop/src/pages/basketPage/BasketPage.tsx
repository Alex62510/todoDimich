import React from 'react';
import style from './basket.module.css'
import {Items} from "../../components/items/Items";
import {Order} from "../../components/order/Order";
import {useNavigate} from "react-router-dom";
import {RootState, useAppDispatch} from "../../store/state";
import {useSelector} from "react-redux";
import Item from "../../components/items/item/item";
import {useAuth} from "../../hooks/useAuth";
import {LoginPage} from "../loginPage/loginPage";

export const BasketPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const items = useSelector((state: RootState) => state.items)
    const basketItems = items.filter(t => t.added)
    const {isAuth} = useAuth()
    const total = () => {


    }
    return (
        <>
            {isAuth ? <div className={style.basketContainer}>

                <div className={style.basket}>
                    <div className={style.items}>
                        {basketItems.map(t => <Item added={t.added} id={t.id} price={t.price} title={t.title}
                                                    key={t.id}/>)}
                    </div>
                    <div className={style.order}>
                        <Order/>
                    </div>
                </div>
                <div>Total:{basketItems.length && basketItems.map(el => el.price * el.count).reduce((acc, el) => acc + el,)} </div>
            </div> : <LoginPage/>}

        </>


    )
        ;
};

