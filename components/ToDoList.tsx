import styles from '../styles/Components.module.css';
import { ToDoView } from '../components';
import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { ToDo } from '../types';

interface ToDoListProps {
  todolist: ToDo[],
  arr: ToDo[],
  setArr: Dispatch<SetStateAction<ToDo[]>>,
  sort: VoidFunction
}

const ToDoList: FC<ToDoListProps> = ({ todolist, arr, setArr, sort }) => {

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
