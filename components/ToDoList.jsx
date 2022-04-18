import styles from '../styles/Components.module.css';
import { ToDoView } from '../components';
import { useState, useEffect } from 'react';


function ToDoList({ todolist, list }) {

  const [displayedList, setDisplayedList] = useState(todolist);

  useEffect(() => {
    setDisplayedList(todolist);
  }, [list])

  return (
    <div>
      {
        todolist.map(t => (
          <div key={t.id} className={styles.todolist}>
            <ToDoView todo={t} list={list} />
          </div>
        ))
      }
    </div>
  )
}
export { ToDoList };
