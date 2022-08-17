import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInterface from './user-interface'
import { act } from 'react-dom/test-utils';

jest.mock('../../state-management/hooks', () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: (state) => jest.fn()
}));
jest.mock('../field/memorie-field', () => {
    return {
        default: () => {
          return <div></div>
        }
    }
});

test('Renders user interface', () => {
  render(<UserInterface id='1'/>);
  const divElement = screen.getByTestId('user-interface');
  expect(divElement).toBeInTheDocument();
});

