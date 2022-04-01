import Home from '../pages';
import { render, screen } from '@testing-library/react';

describe('Home page', () => {

  it('Page Renders', () => {
    render(<Home />);
    const headings = screen.getAllByRole('textbox');
    expect(headings[0].value).toBe('');
  })

})
