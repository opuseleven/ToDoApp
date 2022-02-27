import styles from '../styles/Components.module.css';
import { ToDoView } from '../components';

function ToDoList({ todolist }) {

  return (
    <div>
      todolist && (
        {
          todolist.map(t => (
            <ToDoView todo={t} />
          ))
        }
      )
    </div>
  )
}
export { ToDoList };
