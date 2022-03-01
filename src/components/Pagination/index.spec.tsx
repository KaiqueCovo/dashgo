import { render, screen, RenderResult } from '@testing-library/react';

import { Pagination } from './';

const setup = (): RenderResult => render(<Pagination />);

describe('Pagination', () => {
  beforeEach(() => setup());

  it('renders correctly', () => {
    const component = screen.getByTestId('pagination-testid');
    expect(component).toBeInTheDocument();
  });
});
