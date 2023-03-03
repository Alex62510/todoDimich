import React from "react";

type AccordeonPropsType = {
    titlevalue: string
    collapsed: boolean
}
function Accordeon(props: AccordeonPropsType) {
    console.log("Accordeon rendering")
    if (props.collapsed) {
        return(
        <div>
            <AccordeonTitle title={props.titlevalue}/>
            <AccordeonBody/>
        </div>)
    } else {return(
        <div>
            <AccordeonTitle title={props.titlevalue}/>
            {/*<AccordeonBody/>*/}
        </div>)
    }
}
type AccordeonTitlePropstype = {
    title: string
}
function AccordeonTitle(props: AccordeonTitlePropstype) {
    console.log("AccordeonTitle rendering")
    return (
        <h3>---{props.title}---</h3>
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

export default Accordeon;