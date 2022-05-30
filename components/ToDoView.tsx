import { CompletedButton, DeleteButton } from '../components';
import { useState, useEffect } from 'react';
import { updateToDo } from '../services';
import styles from '../styles/Components.module.css';
import { ToDo } from '../types';

interface ToDoViewProps {
  todo: ToDo,
  arr: ToDo[],
  setArr: React.Dispatch<React.SetStateAction<ToDo[]>>,
  sort: VoidFunction
}

const ToDoView: React.FC<ToDoViewProps> = ({ todo, arr, setArr, sort }) => {

  const [name, setName] = useState<string>(todo.name);

  useEffect(() => {
    updateToDo(todo, name);
  }, [name])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div key={todo.id} className={styles.todoviewcontainer}>
      <div className={styles.completedbuttoncontainer}>
        <CompletedButton todo={todo} sort={sort} />
      </div>
      <div className={styles.todoinputcontainer}>
        <input type="text" value={name} onChange={(event) => handleChange(event)} className={styles.todoinput} />
      </div>
      <div>
        <DeleteButton todo={todo} arr={arr} setArr={setArr} />
      </div>
    </div>
  )
}
export { ToDoView };
