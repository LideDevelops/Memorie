import React from 'react';
import { render, screen } from '@testing-library/react';
import MemorieCard from './memorie-card';

test('Renders Memorie card unfolded', () => {
  render(<MemorieCard id='1' text='1'/>);
  const divElement = screen.getByTestId('memorie-card-1');
  const pText = screen.getByText('1');
  expect(divElement).toBeInTheDocument();
  expect(divElement).toContainElement(pText);
});