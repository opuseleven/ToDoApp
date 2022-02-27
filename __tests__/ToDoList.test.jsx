import { ToDoList } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ToDoList component', () => {

  const testtodo1 = {
    id: 1,
    name: 'test todo 1',
    completed: false
  }
  const testtodo2 = {
    id: 2,
    name: 'test todo 2',
    completed: false
  }
  const testtodo3 = {
    id: 3,
    name: 'test todo 3',
    completed: false
  }

  const todolist = [testtodo1, testtodo2, testtodo3];

  it('Component renders', () => {
    render(<ToDoList todolist={todolist} />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toBeDefined();
  })
  it('Passes data to ToDoView component', () => {
    render(<ToDoList todolist={todolist} />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('test todo 1');
    expect(headings[1]).toHaveTextContent('test todo 2');
    expect(headings[2]).toHaveTextContent('test todo 3');
  })
})
