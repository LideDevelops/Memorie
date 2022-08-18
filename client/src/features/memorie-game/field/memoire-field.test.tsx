import { render, screen, within } from '@testing-library/react';
import React from 'react';
import { MemorieCardModel } from "../models/memorie.dto";
import MemorieField from "./memorie-field";
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}));

const fakeMemorieCards: MemorieCardModel[] = [
  {
    identidfier: 1,
    name: 'test',
    lastModified: "2022-07-31T09:58:28.514Z"
  }
];

jest.mock('../card/memorie-card', () => {
  return {
      default: () => {
        return <div>card</div>
      }
  }
});


jest.mock('../api/memorie-api', () => ({
  useMemorieCards: () => fakeMemorieCards
}));

const reduxMock = jest.mock('../../state-management/hooks', () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: (state) => jest
    .fn()

}));

test('Renders memorie field with 2 cards', async () => {
  
  render(<MemorieField id='1'/>);
  const divElement = screen.getByTestId(`memorie-field-1`);
  const cards = await within(divElement).findAllByText("card");
  expect(divElement).toBeInTheDocument();
  expect(cards.length).toBe(2)
});
