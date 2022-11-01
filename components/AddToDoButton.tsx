import { addNewToDo, getToDo } from '../services';
import styles from '../styles/Components.module.css';
import { ToDo } from '../types';
import { FC, Dispatch, SetStateAction } from 'react';

interface AddToDoButtonProps {
  arr: ToDo[],
  setArr: Dispatch<SetStateAction<ToDo[]>>
}

const AddToDoButton: FC<AddToDoButtonProps> = ({ arr, setArr }) => {

  function handleClick() {
    const newId = arr.length + 1;
    const newToDo = getToDo(newId, '', false);
    addNewToDo(newToDo, arr, setArr);
  }

  return (
    <div className={styles.newtodobuttoncontainer}>
      <button onClick={() => handleClick()} className={styles.newtodobutton}>
        +
      </button>
    </div>
  )
}
export { AddToDoButton };
