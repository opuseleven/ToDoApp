import styles from '../styles/Components.module.css';
import { removeToDo } from '../services';
import { ToDo } from '../types';

interface DeleteButtonProps {
  todo: ToDo,
  arr: ToDo[],
  setArr: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ todo, arr, setArr }) => {

  function handleClick() {
    removeToDo(todo, arr, setArr);
  }

  return (
    <div>
      <button className={styles.deletebutton} onClick={handleClick}>x</button>
    </div>
  )
}
export { DeleteButton };
