import styles from '../styles/Components.module.css';
import { ToDoView } from '../components';
import { useState, useEffect } from 'react';


function ToDoList({ todolist, arr, setArr, sort }) {

  const [displayedList, setDisplayedList] = useState(todolist);

  useEffect(() => {
    setDisplayedList(todolist);
  }, [todolist])

  return (
    <div>
      {
        displayedList.map(t => (
          <div key={t.id.toString()} className={styles.todolist}>
            <ToDoView todo={t} arr={arr} setArr={setArr} sort={sort} />
          </div>
        ))
      }
    </div>
  )
}
export { ToDoList };
