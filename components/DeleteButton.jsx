import styles from '../styles/Components.module.css';
import { removeToDo } from '../services';

function DeleteButton({ todo, list }) {

  function handleClick() {
    removeToDo(todo.id, list);
  }

  return (
    <div>
      <button className={styles.deletebutton} onClick={handleClick}>x</button>
    </div>
  )
}
export { DeleteButton };
