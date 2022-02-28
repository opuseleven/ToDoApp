import { ToDoListContainer } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ToDoListContainer component', () => {

  const testtodo1 = {
    id: 1,
    name: 'do something',
    completed: false
  }
  const testtodo2 = {
    id: 2,
    name: 'do something else',
    completed: false,
  }
  const testtodo3 = {
    id: 3,
    name: 'done something',
    completed: true
  }
  const testtodo4 = {
    id: 4,
    name: 'another one',
    completed: false
  }
  const testtodo5 = {
    id: 5,
    name: 'done something else',
    completed: true
  }

  const arr = [testtodo1, testtodo2, testtodo3, testtodo4, testtodo5];

  it('Component renders', () => {
    render(<ToDoListContainer list={arr} />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toBeDefined();
  })

  it('Sorts lists and passes data', () => {
    render(<ToDoListContainer list={arr} />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('do something');
    expect(headings[1]).toHaveTextContent('do something else');
    expect(headings[2]).toHaveTextContent('another one');
    expect(headings[3]).toHaveTextContent('done something');
    expect(headings[4]).toHaveTextContent('done something else');
  })
})
