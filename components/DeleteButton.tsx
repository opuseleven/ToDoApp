import styles from '../styles/Components.module.css';
import { removeToDo } from '../services';
import { ToDo } from '../types';
import { FC, Dispatch, SetStateAction } from 'react';

interface DeleteButtonProps {
  todo: ToDo,
  arr: ToDo[],
  setArr: Dispatch<SetStateAction<ToDo[]>>
}

const DeleteButton: FC<DeleteButtonProps> = ({ todo, arr, setArr }) => {

  function handleClick() {
    removeToDo(todo, arr, setArr);
  }

  return (
    <div>
      <button className={styles.deletebutton} onClick={handleClick}>
        x
      </button>
    </div>
  )
}
export { DeleteButton };
