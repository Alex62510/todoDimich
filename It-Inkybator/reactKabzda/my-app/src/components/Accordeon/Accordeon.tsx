import React from "react";

export type AccordeonPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordeon(props: AccordeonPropsType) {
    console.log("Accordeon rendering")

    return (
        <div>
            <AccordeonTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {props.collapsed && <AccordeonBody/>}
        </div>)
}

type AccordeonTitlePropstype = {
    title: string
    onChange: () => void
}

function AccordeonTitle(props: AccordeonTitlePropstype) {
    console.log("AccordeonTitle rendering")
    return (
        <h3 onClick={(e)=>props.onChange()}>---{props.title}---</h3>
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

