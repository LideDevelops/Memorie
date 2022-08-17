import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


jest.mock("./features/memorie-game/user-interface")

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("app-main-div");
  expect(linkElement).toBeInTheDocument();
});
