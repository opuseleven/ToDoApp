import { addNewToDo, getToDo } from '../services';

function AddToDoButton({ arr, setArr }) {

  function handleClick() {
    const newId = arr.length + 1;
    const newToDo = getToDo(newId, '', false);
    addNewToDo(newToDo, arr, setArr);
  }

  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  )
}
export { AddToDoButton };
