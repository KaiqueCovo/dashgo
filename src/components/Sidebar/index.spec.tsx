import { render, screen, RenderResult } from '@testing-library/react';

import { Sidebar } from './';

const setup = (): RenderResult => render(<Sidebar />);

describe('Sidebar', () => {
  beforeEach(() => setup());

  it('renders correctly', () => {
    const component = screen.getByTestId('sidebar-testid');
    expect(component).toBeInTheDocument();
  });
});
