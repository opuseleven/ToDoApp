import { ToDo } from '../types';

function removeToDo(id: number, arr: ToDo[], setArr: React.Dispatch<React.SetStateAction<ToDo[]>>) {

  let newArr = arr;

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].id == id) {
      newArr.splice(i, 1);
    }
  }
  setArr(newArr);
}
export { removeToDo };
