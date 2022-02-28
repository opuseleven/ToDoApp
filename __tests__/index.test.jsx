import Home from '../pages';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home page', () => {

  it('Page Renders', () => {
    render(<Home />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('ToDoApp');
    expect(headings[1]).toHaveTextContent('');
  })

})
