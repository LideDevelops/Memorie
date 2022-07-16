import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MemorieField from './memorie-field';

test('Renders Memorie filed', () => {
  render(<MemorieField id='test'/>);
  const divElement = screen.getByTestId('memorie-field-test');
  expect(divElement).toBeInTheDocument();
});