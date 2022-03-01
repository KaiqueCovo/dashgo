import { render, screen, RenderResult } from '@testing-library/react';

import { Header } from './';

const setup = (): RenderResult => render(<Header />);

describe('Header', () => {
  beforeEach(() => setup());

  it('renders correctly', () => {
    const component = screen.getByText('Dashgo');
    expect(component).toBeInTheDocument();
  });
});
