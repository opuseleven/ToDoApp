import { DeleteButton } from '../components';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getToDo } from '../services';

describe('DeleteButton Component', () => {

  const td1 = getToDo(1, 'test1', false);
  const td2 = getToDo(2, 'test2', false);

  let arr = [td1, td2];
  function setArr(newArr) {
    arr = newArr;
  }

  it('Component renders', () => {
    render(<DeleteButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('x');
  })

  it('onClick runs removeToDo service', () => {
    render(<DeleteButton todo={td2} arr={arr} setArr={setArr} />)
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(arr).toEqual([td1]);
  })
})
