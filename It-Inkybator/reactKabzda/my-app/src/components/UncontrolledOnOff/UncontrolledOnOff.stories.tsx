import React, {useState} from 'react';
import {UncontrolledonOff} from "./UncontrolledonOff";
import {action, actions} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledonOff',
    component: UncontrolledonOff,
    };

const callback=action("Switch")
export const OnMode= () => <UncontrolledonOff onChange={callback} defaultOn={true}/>;

export const OffMode= () => <UncontrolledonOff  onChange={callback} defaultOn={true}/>;


