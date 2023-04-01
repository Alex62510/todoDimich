import {useState} from "react";

type PropsType = {
    on: boolean
    onChange:(on:boolean)=>void
}
export const OnOff = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "25px",
        border: "1px solid black",
        display: "inline-block",
        padding: "3px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "25px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "3px",
        backgroundColor: props.on ? "white" : "red"
    }
    const lightStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "20px",
        marginTop: "20px",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>props.onChange(true)}>on</div>
            <div style={offStyle} onClick={()=>props.onChange(false)}>off</div>
            <div style={lightStyle}></div>
        </div>

    )
}