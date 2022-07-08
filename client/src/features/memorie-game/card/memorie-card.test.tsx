import React from 'react';
import { render, screen } from '@testing-library/react';
import MemorieCard from './memorie-card';

test('renders learn react link', () => {
  render(<MemorieCard id='1'/>);
  const linkElement = screen.getByTestId('memorie-card-1');
  expect(linkElement).toBeInTheDocument();
});