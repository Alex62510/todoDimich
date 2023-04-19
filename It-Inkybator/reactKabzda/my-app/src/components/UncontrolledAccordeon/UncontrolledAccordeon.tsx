import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordeonPropsType = {
    titleValue: string

}

export function UncontrolledAccordeon(props: AccordeonPropsType) {

// let [collapsed, setCollapsed]=useState(false)
    let [state, dispatch] = useReducer(reducer, {collapset:false})
    return (
        <div>
            <AccordeonTitle title={props.titleValue} onClick={() => {dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {state.collapset && <AccordeonBody/>}
        </div>
    )
}

type AccordeonTitlePropstype = {
    title: string
    onClick: () => void
}

function AccordeonTitle(props: AccordeonTitlePropstype) {
    console.log("AccordeonTitle rendering")
    return (
        <h3 onClick={() => props.onClick()}>---{props.title}---</h3>
    )
}

function AccordeonBody() {
    console.log("AccordeonBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

