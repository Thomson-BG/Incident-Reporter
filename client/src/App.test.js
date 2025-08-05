import { render, screen } from '@testing-library/react';
import App from './App';

test('renders incident report generator', () => {
  render(<App />);
  const linkElement = screen.getByText(/incident report generator/i);
  expect(linkElement).toBeInTheDocument();
});
