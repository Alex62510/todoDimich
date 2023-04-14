import React from "react";
export type ItemType={
    title:string
    value:any
}

export type AccordeonPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items:ItemType[]
    onClick:(value:any)=>void
}

export function Accordeon(props: AccordeonPropsType) {
    console.log("Accordeon rendering")

    return (
        <div>
            <AccordeonTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {props.collapsed && <AccordeonBody items={props.items} onClick={props.onClick}/>}
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
export type AccordeonBodyPropsType = {
    items:ItemType[]
    onClick:(value:any)=>void
}

function AccordeonBody(props:AccordeonBodyPropsType) {
    console.log("AccordeonBody rendering")
    return (
        <ul>
            {props.items.map((i,index)=><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

