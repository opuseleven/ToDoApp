import styles from '../styles/Components.module.css';
import { removeToDo } from '../services';

function DeleteButton({ todo, arr, setArr }) {

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
