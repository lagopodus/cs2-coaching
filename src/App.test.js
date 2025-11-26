import { render, screen } from '@testing-library/react';
import App from './App';

test('renders booking call-to-action', () => {
  render(<App />);
  const cta = screen.getByText(/termin anfragen/i);
  expect(cta).toBeInTheDocument();
});
