import styles from '../styles/Components.module.css';
import { ToDoList, CompletedList } from '../components';
import { getSortedLists } from '../services';
import { useState, useEffect } from 'react';

function ToDoListContainer({ arr, setArr }) {

  const [sortedLists, setSortedLists] = useState(getSortedLists(arr));

  useEffect(() => {
    setSortedLists(getSortedLists(arr));
  }, [arr])

  return (
    <div>
      <ToDoList todolist={sortedLists.todoArr} arr={arr} setArr={setArr} />
      <ToDoList todolist={sortedLists.completedArr} arr={arr} setArr={setArr} />
    </div>
  )
}
export { ToDoListContainer };
