import { ToDoListContainer } from '../components';
import { render, fireEvent, screen, act } from '@testing-library/react';

describe('ToDoListContainer component', () => {

  let testtodo1 = {
    id: 1,
    name: 'do something',
    completed: false
  }
  let testtodo2 = {
    id: 2,
    name: 'do something else',
    completed: false,
  }
  let testtodo3 = {
    id: 3,
    name: 'done something',
    completed: true
  }
  let testtodo4 = {
    id: 4,
    name: 'another one',
    completed: false
  }
  let testtodo5 = {
    id: 5,
    name: 'done something else',
    completed: true
  }

  let arr = [testtodo1, testtodo2, testtodo3, testtodo4, testtodo5];
  function setArr(newArr) {
    arr = newArr;
  }

  it('Component renders', () => {
    render(<ToDoListContainer arr={arr} setArr={setArr} />);
    const headings = screen.getAllByRole('textbox');
    expect(headings[0]).toBeDefined();
  })

  it('Sorts lists and passes data', () => {
    render(<ToDoListContainer arr={arr} setArr={setArr} />);
    const headings = screen.getAllByRole('textbox');
    expect(headings[0].value).toBe('do something');
    expect(headings[1].value).toBe('do something else');
    expect(headings[2].value).toBe('another one');
    expect(headings[3].value).toBe('done something');
    expect(headings[4].value).toBe('done something else');
  })

  it('Updates data', () => {
    render(<ToDoListContainer arr={arr} setArr={setArr} />);
    const headings = screen.getAllByRole('textbox');
    const checkboxes = screen.getAllByRole('checkbox');
    act(() => {
      fireEvent.click(checkboxes[0]);
    })
    expect(testtodo1.completed).toBe(true);
    expect(headings[0].value).toBe('do something');
    expect(checkboxes[0].checked).toBe(true);
  })
})
