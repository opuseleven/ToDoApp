import { AddToDoButton } from '../components';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AddToDoButton component', () => {

  let arr = [];
  function setArr(newArr) {
    arr = newArr;
  }

  it('Component renders', () => {
    render(<AddToDoButton />);
    expect(screen.getByRole('button')).toHaveTextContent('+');
  })

  it('Component functions to add a new empty ToDo obj to arr', () => {
    render(<AddToDoButton arr={arr} setArr={setArr} />);
    act(() => {
      fireEvent.click(screen.getByText('+'));
    })
    expect(arr.length).toBe(1);
    expect(arr[0].id).toBe(1);
  })

  it('Functions to add another empty ToDo obj to arr', () => {
    render(<AddToDoButton arr={arr} setArr={setArr} />);
    act(() => {
      fireEvent.click(screen.getByText('+'));
    })
    expect(arr.length).toBe(2);
    expect(arr[1].id).toBe(2);
  })
})
