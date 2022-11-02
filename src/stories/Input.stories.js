import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../components/Input/Input';

const stories = storiesOf('App Test',module);

stories.add('App',()=>{
    return <Input/>
})