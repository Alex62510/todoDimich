import React, {useState} from 'react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};
const callBack =action("raiting chinget inside component")

export const EmptyRaiting = () => <UncontrolledRating defaultValue={0} onChange={callBack}/>;
export const Raiting1 = () => <UncontrolledRating defaultValue={1} onChange={callBack}/>;
export const Raiting2 = () => <UncontrolledRating defaultValue={2} onChange={callBack}/>;
export const Raiting3 = () => <UncontrolledRating defaultValue={3} onChange={callBack}/>;
export const Raiting4 = () => <UncontrolledRating defaultValue={4} onChange={callBack}/>;
export const Raiting5 = () => <UncontrolledRating defaultValue={5} onChange={callBack}/>;
