import { addNewToDo, getToDo } from '../services';
import { ToDo } from '../types';

describe('addNewToDo function', () => {

  const td1 = getToDo(1, 'test1', false);
  const td2 = getToDo(2, 'test2', false);
  const td3 = getToDo(3, 'test3', false);
  const td4 = getToDo(4, 'test4', false);

  let arr = [td1, td2, td3, td4];
  function setArr(newArr) {
    arr = newArr
  }

  it('Adds a ToDo object to arr', () => {
    const newToDo = getToDo(5, 'test5', false);
    addNewToDo(newToDo, arr, setArr);
    expect(arr.length).toBe(5);
  })
})
