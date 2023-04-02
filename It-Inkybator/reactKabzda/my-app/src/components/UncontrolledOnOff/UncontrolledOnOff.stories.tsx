import React, {useState} from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action, actions} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledonOff',
    component: UncontrolledOnOff,
};

const callback=action("Switch")
export const OnMode= () => <UncontrolledOnOff onChange={callback} defaultOn={true}/>;

export const OffMode= () => <UncontrolledOnOff  onChange={callback} defaultOn={true}/>;