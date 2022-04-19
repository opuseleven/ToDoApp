import { ToDoList } from '../components';
import { render, screen } from '@testing-library/react';
import { getSortedLists } from '../services';

describe('ToDoList component', () => {

  let testtodo1 = {
    id: 1,
    name: 'test todo 1',
    completed: false
  }
  let testtodo2 = {
    id: 2,
    name: 'test todo 2',
    completed: false
  }
  let testtodo3 = {
    id: 3,
    name: 'test todo 3',
    completed: false
  }

  const todolist = [testtodo1, testtodo2, testtodo3];

  let sortedLists = getSortedLists(todolist);
  function setSortedLists(newArr) {
    sortedLists = getSortedLists(newArr);
  }

  function sort() {
    setSortedLists(getSortedLists(todolist));
  }

  it('Component renders', () => {
    render(<ToDoList todolist={todolist} sort={sort} />);
    const headings = screen.getAllByRole('textbox');
    expect(headings[0]).toBeDefined();
  })
  it('Passes data to ToDoView component', () => {
    render(<ToDoList todolist={todolist} sort={sort} />);
    const headings = screen.getAllByRole('textbox');
    expect(headings[0].value).toBe('test todo 1');
    expect(headings[1].value).toBe('test todo 2');
    expect(headings[2].value).toBe('test todo 3');
  })
})
