import { render, screen } from '@testing-library/react';
import MemorieCard from './memorie-card';

test('Draw Memorie card', async () => {
  render(<MemorieCard />);
  const linkElement = await screen.findByTestId("memorie-card");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeVisible();
});
