import React, {useState} from 'react';
import {action, actions} from "@storybook/addon-actions";
import {UncontrolledAccordeon} from "./UncontrolledAccordeon";

export default {
    title: 'UncontrolledAccordeon',
    component: UncontrolledAccordeon,
};

export const ModeChinging= () => {
    return <UncontrolledAccordeon titleValue={"Users"} />
}