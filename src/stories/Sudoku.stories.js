import React from 'react';
import { storiesOf } from '@storybook/react';
import { Sudoku } from '../components/Sudoku/Sudoku';

const stories = storiesOf('App Test', module);

stories.add('Sudoku', () => {
  return <Sudoku />;
});
