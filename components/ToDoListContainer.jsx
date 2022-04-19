import styles from '../styles/Components.module.css';
import { ToDoList, CompletedList } from '../components';
import { getSortedLists } from '../services';
import { useState, useEffect } from 'react';

function ToDoListContainer({ arr, setArr }) {

  const [sortedLists, setSortedLists] = useState(getSortedLists(arr));

  useEffect(() => {
    sort();
  }, [arr])

  function sort() {
    setSortedLists(getSortedLists(arr));
  }

  return (
    <div>
      <ToDoList todolist={sortedLists.todoArr} arr={arr} setArr={setArr} sort={sort} />
      <ToDoList todolist={sortedLists.completedArr} arr={arr} setArr={setArr} sort={sort} />
    </div>
  )
}
export { ToDoListContainer };
