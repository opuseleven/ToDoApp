import { ToDoView } from '../components';
import { render, fireEvent, screen } from '@testing-library/react';
import { getToDo } from '../services';

describe('ToDoView component', () => {

  let testToDo = {
    id: 1,
    name: 'test todo',
    completed: false
  }

  function sort() {
    // Tested elsewhere, but needed for test to pass
  }

  it('Component Renders', () => {
    render(<ToDoView  todo={testToDo} sort={sort} />);
    expect(screen.getByRole('textbox')).toBeDefined();
  })

  it('Passes Name value', () => {
    render(<ToDoView todo={testToDo} sort={sort} />);
    expect(screen.getByRole('textbox').value).toBe('test todo');
  })

  it('Updates values onChange', () => {
    render(<ToDoView todo={testToDo} sort={sort} />);
    let textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, {target: {value: 'test change'}});
    expect(testToDo.name).toBe('test change');
  })

  it('Completed button updates todo.completed', () => {
    render(<ToDoView todo={testToDo} sort={sort} />);
    let checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(testToDo.completed).toBe(true);
  })
})
