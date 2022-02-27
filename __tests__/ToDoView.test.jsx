import { ToDoView } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ToDoView component', () => {

  const testToDo = {
    id: 1,
    name: 'test todo',
    completed: false
  }

  it('Component Renders', () => {
    render(<ToDoView  todo={testToDo} />);
    expect(screen.getByRole('heading')).toHaveTextContent('test todo');
  })
})
