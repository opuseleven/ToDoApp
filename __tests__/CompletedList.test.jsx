import { CompletedList } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CompletedList componet', () => {

  const testcompleted1 = {
    id: 4,
    name: 'completed1',
    completed: true
  }
  const testcompleted2 = {
    id: 5,
    name: 'completed2',
    completed: true
  }
  const testcompleted3 = {
    id: 6,
    name: 'completed3',
    completed: true
  }
  const testcompleted4 = {
    id: 7,
    name: 'completed4',
    completed: true
  }

  const completedlist = [testcompleted1, testcompleted2, testcompleted3, testcompleted4];

  it('Component renders', () => {
    render(<CompletedList completedlist={completedlist} />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toBeDefined();
  })
  it('Passes data to ToDoView component', () => {
    render(<CompletedList completedlist={completedlist} />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('completed1');
    expect(headings[1]).toHaveTextContent('completed2');
    expect(headings[2]).toHaveTextContent('completed3');
    expect(headings[3]).toHaveTextContent('completed4');
  })
})
