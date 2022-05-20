import React from 'react';
import { storiesOf } from '@storybook/react'
import { Requirements } from '../components/MultiSelect';


export default {
    title:"Example/Requirements",
    component:Requirements,
   
}

const Template = (args) => <Requirements {...args}/>;

export const Primary = Template.bind({});


