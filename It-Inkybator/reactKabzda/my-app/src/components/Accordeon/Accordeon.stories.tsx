import React, {useState} from 'react';
import {action, actions} from "@storybook/addon-actions";
import {Accordeon} from "./Accordeon";

export default {
    title: 'Accordeon',
    component: Accordeon,
    };
const callBack = action("Accordeon mode chinged")
export const MenuCollapsedMode = () => <Accordeon titleValue={"Menu"} collapsed={true} onChange={callBack}/>;
export const UsersUncCollapsedMode = () => <Accordeon titleValue={"Users"} collapsed={false} onChange={callBack}/>;

export const ModeChinging= () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordeon titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}/>
}