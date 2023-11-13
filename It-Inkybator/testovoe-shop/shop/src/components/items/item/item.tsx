import React, {FC, useEffect, useState} from 'react';
import style from "./item.module.css";
import {changeCount, changeItem} from "../../../store/slaces/itemsSlice";
import {useAppDispatch} from "../../../store/state";
import {carrentPage} from "../../../hooks/carrentPage";
import {Paths} from "../../../Path/Path";


type PropsType = {
    title: string | null
    price: number | null
    added: boolean
    id: number | null
}
const Item: FC<PropsType> = ({title, price, added, id}) => {
    const dispatch = useAppDispatch()
    const currentUrl = carrentPage(Paths.basket)

    const [count, setCount] = useState<number>(1)
    const changeBasketItem = (id: number | null, added: boolean) => {
        dispatch(changeItem({id, added}))
    }

    if (count === 0) {
        changeBasketItem(id, false)
    }
    useEffect(() => {
        dispatch(changeCount({id, count}))
    }, [count,dispatch])
    return (
        <div className={currentUrl ? style.itemBasket : style.item}>
            <div className={currentUrl ? style.imageBasket : style.image}>image</div>
            <div className={currentUrl ? style.descriptionBasket : style.description}>
                <div>{title}</div>
                <div className={currentUrl ? style.backet : style.addBacket}>
                    <div>{currentUrl? `price: ${price && price*count}`:`price: ${price}`}</div>
                    {currentUrl ? (<div className={style.priceBasket}>
                        <button onClick={() => setCount(count + 1)}>+</button>
                        <div>{count}</div>
                        <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
                    </div>) : (<button onClick={() => changeBasketItem(id, true)} disabled={added}>add</button>)}
                </div>
            </div>
        </div>
    );
};

export default Item;