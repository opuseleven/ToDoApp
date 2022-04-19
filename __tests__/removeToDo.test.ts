import { removeToDo, getToDo } from '../services';

describe('removeToDo service', () => {

  const td1 = getToDo(1, 'test1', false);
  const td2 = getToDo(2, 'test2', false);
  const td3 = getToDo(3, 'test3', false);
  const td4 = getToDo(4, 'test4', false);
  const td5 = getToDo(5, 'test5', false);

  let arr = [td1, td2, td3, td4, td5];
  function setArr(newArr: any) {
    arr = newArr;
  }

  it('Removes a ToDo object from the end of the arr', () => {
    removeToDo(td5, arr, setArr);
    expect(arr.length).toBe(4);
    expect(arr).toEqual([td1, td2, td3, td4]);
  })

  it('Removes ToDo object from the middle of array', () => {
    removeToDo(td2, arr, setArr);
    expect(arr.length).toBe(3);
    expect(arr).toEqual([td1, td3, td4]);
  })
})
