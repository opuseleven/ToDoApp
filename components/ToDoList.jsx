import styles from '../styles/Components.module.css';
import { ToDoView } from '../components';

function ToDoList({ todolist }) {

  return (
    <div>
      {
        todolist.map(t => (
          <div key={t.id}>
            <ToDoView todo={t} />
          </div>
        ))
      }
    </div>
  )
}
export { ToDoList };
