import { ToDo } from '../types';
import { Dispatch, SetStateAction } from 'react';

function addNewToDo(newToDo: ToDo, arr: ToDo[], setArr: Dispatch<SetStateAction<ToDo[]>>) {

  const addArr: ToDo[] = [newToDo];

  const newArr = arr.concat(addArr);

  setArr(newArr);

}
export { addNewToDo };
