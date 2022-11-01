import styles from '../styles/Components.module.css';
import { ToDoList } from '../components';
import { getSortedLists } from '../services';
import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { ToDo } from '../types';

interface ToDoListContainerProps {
  arr: ToDo[],
  setArr: Dispatch<SetStateAction<ToDo[]>>
}

const ToDoListContainer: FC<ToDoListContainerProps> = ({ arr, setArr }) => {

  const [sortedLists, setSortedLists] = useState(getSortedLists(arr));

  useEffect(() => {
    sort();
  }, [arr])

  function sort() {
    setSortedLists(getSortedLists(arr));
  }

  return (
    <div>

      <ToDoList todolist={sortedLists.todoArr} arr={arr} setArr={setArr}
        sort={sort} />

      <ToDoList todolist={sortedLists.completedArr} arr={arr} setArr={setArr}
        sort={sort} />

    </div>
  )
}
export { ToDoListContainer };
