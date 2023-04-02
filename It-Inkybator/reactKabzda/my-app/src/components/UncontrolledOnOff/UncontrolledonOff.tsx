import {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?:boolean
}
export const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

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
    const onClicked = () => {
        props.onChange(true)
        setOn(true)
    }

    const offClicked = () => {
        props.onChange(false)
        setOn(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={offClicked}>off</div>
            <div style={lightStyle}></div>
        </div>

    )
}