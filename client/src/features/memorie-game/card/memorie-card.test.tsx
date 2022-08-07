import React from 'react';
import { render, screen } from '@testing-library/react';
import MemorieCard from './memorie-card';
import { act } from 'react-dom/test-utils';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}));

test('Renders Memorie card unflipped', () => {
  render(<MemorieCard id='1' text='1'/>);
  const divElement = screen.getByTestId('memorie-card-1');
  const pText = screen.getByText('Cover');
  expect(divElement).toBeInTheDocument();
  expect(divElement).toContainElement(pText);
});

test('Renders Memorie card flipped', () => {
  render(<MemorieCard id='1' text='1'/>);
  const divElement = screen.getByTestId('memorie-card-1');
  act(() => divElement.click());
  const pText = screen.getByText('1');
  expect(divElement).toBeInTheDocument();
  expect(divElement).toContainElement(pText);
});