import { render, screen, RenderResult } from '@testing-library/react';

import { Input } from './';

const setup = (): RenderResult => render(<Input name="lorem" label='Lorem ipsum' />);

describe('Input', () => {
  beforeEach(() => setup());

  it('renders correctly', () => {
    const component = screen.getByLabelText('Lorem ipsum');
    expect(component).toBeInTheDocument();
  });
});
