import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MemorieField from './memorie-field';

test('Renders Memorie card unflipped', () => {
  render(<MemorieField cardAmound={2} id='test'/>);
  const divElement = screen.getByTestId('memorie-field-test');
  expect(divElement).toBeInTheDocument();
});