import React from "react";

function Accordeon(props: any) {
    console.log("Accordeon rendering")
    return (

        <div>
            <AccordeonTitle title={props.titleValue} />
            <AccordeonBody />
        </div>
    )
}
function AccordeonTitle(props: any) {
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