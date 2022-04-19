import { CompletedButton } from '../components';
import { render, fireEvent, screen } from '@testing-library/react';

describe('CompletedButton component', () => {

  let testToDo = {
    id: 1,
    name: 'test todo',
    completed: false
  }

  function sort() {
    // tested elsewhere, but needed for test to pass
  }

  it('Component renders', () => {
    render(<CompletedButton todo={testToDo} sort={sort} />);
    expect(screen.getByRole('checkbox')).toBeDefined();
  })

  it('Component renders checked', () => {
    render(<CompletedButton todo={testToDo} sort={sort} />);
    expect(screen.getByRole('checkbox')).toHaveProperty('checked');
  })

  it('Updates completes prop onChange', () => {
    render(<CompletedButton todo={testToDo} sort={sort} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(testToDo.completed).toBe(true);
  })
})
