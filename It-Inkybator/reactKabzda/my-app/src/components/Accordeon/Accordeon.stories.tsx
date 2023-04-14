import React, {useState} from 'react';
import {Accordeon} from "./Accordeon";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/Accordeon',
    component: Accordeon,
}


const callback = action("Accordeon mode chinge event fired")
const onClickEvent = action("Some Item was clicked")
export const MenuCollapsedMode = () => <Accordeon
    titleValue={"Menu"}
    collapsed={true}
    onChange={callback} items={[]}
    onClick={onClickEvent}
/>
export const MenuUncollapsedMode = () => <Accordeon
    titleValue={"Users"}
    collapsed={false}
    onChange={callback}
    items={[{title: "Dima", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}, {
        title: "Victor",
        value: 4
    }]}
    onClick={onClickEvent}
/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordeon
        titleValue={'Users'}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[{title: "Dima", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}, {
            title: "Victor",
            value: 4
        }]}
        onClick={onClickEvent}
    />
}
