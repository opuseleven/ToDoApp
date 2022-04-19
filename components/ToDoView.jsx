import { CompletedButton, DeleteButton } from '../components';
import { useState, useEffect } from 'react';
import { updateToDo } from '../services';
import styles from '../styles/Components.module.css';

function ToDoView({ todo, arr, setArr, sort }) {

  const [name, setName] = useState(todo.name);

  useEffect(() => {
    updateToDo(todo, name);
  }, [name])

  return (
    <div key={todo.id} className={styles.todoviewcontainer}>
      <div className={styles.completedbuttoncontainer}>
        <CompletedButton todo={todo} sort={sort} />
      </div>
      <div className={styles.todoinputcontainer}>
        <input type="text" value={name} onChange={() => setName(event.target.value)} className={styles.todoinput} />
      </div>
      <div>
        <DeleteButton todo={todo} arr={arr} setArr={setArr} />
      </div>
    </div>
  )
}
export { ToDoView };
