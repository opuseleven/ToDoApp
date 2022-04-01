import { CompletedButton } from '../components';
import { render, fireEvent, screen } from '@testing-library/react';

describe('CompletedButton component', () => {

  let testToDo = {
    id: 1,
    name: 'test todo',
    completed: false
  }

  it('Component renders', () => {
    render(<CompletedButton todo={testToDo} />);
    expect(screen.getByRole('checkbox')).toBeDefined();
  })

  it('Component renders checked', () => {
    render(<CompletedButton todo={testToDo} />);
    expect(screen.getByRole('checkbox')).toHaveProperty('checked');
  })

  it('Updates completes prop onChange', () => {
    render(<CompletedButton todo={testToDo} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(testToDo.completed).toBe(true);
  })
})
