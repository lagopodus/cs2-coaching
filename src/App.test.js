import { render, screen } from '@testing-library/react';
import App from './App';

it('renders coaching hero and booking form', () => {
  render(<App />);
  expect(screen.getByText(/Individuelle CS2 Sessions/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Präzision, Game Sense/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Dein Slot in 60 Sekunden/i })).toBeInTheDocument();
});
