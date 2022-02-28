import { AddToDoButton } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AddToDoButton component', () => {

  it('Component renders', () => {
    render(<AddToDoButton />);
    expect(screen.getByRole('button')).toHaveTextContent('+');
  })
})
