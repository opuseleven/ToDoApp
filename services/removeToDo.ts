import { ToDo } from '../types';
import { Dispatch, SetStateAction } from 'react';

function removeToDo(todo: ToDo, arr: ToDo[], setArr: Dispatch<SetStateAction<ToDo[]>>) {

  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].id == todo.id) {
      newArr.splice(i, 1);
    }
  }
  setArr(newArr);
}
export { removeToDo };
