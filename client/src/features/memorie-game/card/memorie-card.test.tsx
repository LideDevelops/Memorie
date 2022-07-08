import React from 'react';
import { render, screen } from '@testing-library/react';
import MemorieCard from './memorie-card';

test('renders learn react link', () => {
  render(<MemorieCard />);
  const linkElement = screen.getByTestId('memorie-card');
  expect(linkElement).toBeInTheDocument();
});