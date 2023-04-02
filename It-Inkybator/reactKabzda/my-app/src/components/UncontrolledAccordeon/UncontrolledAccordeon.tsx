import React, {useState} from "react";

type AccordeonPropsType = {
    titleValue: string

}
export function UncontrolledAccordeon(props: AccordeonPropsType) {

let [collapsed, setCollapsed]=useState(false)
        return(
        <div>
            <AccordeonTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            {collapsed&&<AccordeonBody/>}
        </div>
        )
}
type AccordeonTitlePropstype = {
    title: string
    onClick:()=>void
}
function AccordeonTitle(props: AccordeonTitlePropstype) {
    console.log("AccordeonTitle rendering")
    return (
        <h3 onClick={()=>props.onClick()}>---{props.title}---</h3>
    )
}
function AccordeonBody(){
    console.log("AccordeonBody rendering")
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

