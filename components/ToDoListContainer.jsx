import styles from '../styles/Components.module.css';
import { ToDoList, CompletedList } from '../components';
import { getSortedLists } from '../services';
import { useState, useEffect } from 'react';

function ToDoListContainer({ list }) {

  const [sortedLists, setSortedLists] = useState(getSortedLists(list));

  useEffect(() => {
    setSortedLists(getSortedLists(list));
  }, [list])

  return (
    <div>
      <ToDoList todolist={sortedLists.todoArr} />
      <ToDoList todolist={sortedLists.completedArr} />
    </div>
  )
}
export { ToDoListContainer };
