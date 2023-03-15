import React from "react";


type buttonType = {
    name: string
    callBack: () => void
}
export const Button = (props: buttonType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}