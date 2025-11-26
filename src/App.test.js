import { render, screen } from '@testing-library/react';
import App from './App';

test('renders booking call-to-action', () => {
  render(<App />);
  const cta = screen.getByText(/book a session/i);
  expect(cta).toBeInTheDocument();
});
