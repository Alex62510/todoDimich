import React, {ChangeEvent, useState} from 'react';

export type FullInputPropsType={
    addMessage:(title:string)=>void
}
export const FullInput = (props:FullInputPropsType) => {
    let[title, setTitle]=useState<string>("")
    console.log(title)
    const onChangeInputHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }
    const onClickButtonHandler=()=>{
props.addMessage(title)
        setTitle("")
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

