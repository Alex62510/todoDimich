import React from 'react';
import style from './Items.module.css'
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store/state";
import {changeItem} from "../../store/slaces/itemsSlice";
import Item from "./item/item";


export const Items = () => {
    const dispatch = useAppDispatch()
    const items = useSelector((state: RootState) => state.items)

    return (
        <div className={style.items}>
            {items.map(t => <Item title={t.title} added={t.added} price={t.price} id={t.id} key={t.id}/>
            )}

        </div>
    )
        ;
};

