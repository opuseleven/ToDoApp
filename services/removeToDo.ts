import { ToDo } from '../types';

function removeToDo(id: number, list: ToDo[]) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      list.splice(i, 1);
    }
  }
}
export { removeToDo };
