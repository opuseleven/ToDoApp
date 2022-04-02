import styles from '../styles/Components.module.css';

function DeleteButton({ todo }) {

  function handleClick() {
    removeToDo(todo);
  }

  return (
    <div>
      <button className={styles.deletebutton} onClick={handleClick}>x</button>
    </div>
  )
}
export { DeleteButton };
