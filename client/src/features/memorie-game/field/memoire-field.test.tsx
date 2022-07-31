import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { useMemorieCards } from "../api/memorie-api";
import { MemorieCardModel } from "../models/memorie.dto";
import MemorieField from "./memorie-field";


const fakeMemorieCards: MemorieCardModel[] = [
  {
    identidfier: 1,
    name: 'test',
    lastModified: "2022-07-31T09:58:28.514Z"
  }
];

jest.mock('../api/memorie-api', () => ({
  useMemorieCards: () => fakeMemorieCards
}));

let container: Element | null = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if(!container) {
    return;
  }
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('Renders Memorie filed for one card with 2 fields', async () => {


  await act(async () => { 
    render(<MemorieField id='test' />, container)
  });

  expect(container?.firstChild?.childNodes.length).toBe(2);
});