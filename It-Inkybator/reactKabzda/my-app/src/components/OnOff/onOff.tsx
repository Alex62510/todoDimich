import {useState} from "react";

type PropsType = {
    // swithOnOff: boolean
}
export const OnOff = (props: PropsType) => {

    let[on, setOn]=useState(false)

    const onStyle = {
        width: "30px",
        height: "25px",
        border: "1px solid black",
        display: "inline-block",
        padding: "3px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "25px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "3px",
        backgroundColor: on ? "white" : "red"
    }
    const lightStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "20px",
        marginTop: "20px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>on</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>off</div>
            <div style={lightStyle}></div>
        </div>

    )
}