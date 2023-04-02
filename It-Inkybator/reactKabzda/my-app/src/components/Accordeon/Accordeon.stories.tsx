import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordeon, AccordeonPropsType} from "./Accordeon";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: Accordeon,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Accordeon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordeon> = (args:AccordeonPropsType) => <Accordeon {...args} />;
const callback=action("Accordeon mode chinge event fired")

export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args={
    onChange:callback,
    collapsed:true,
    titleValue:"Menu",

}

export const MenuCollapsedMode = ()=><Accordeon titleValue={'Menu'} collapsed={true} onChange={callback}/>