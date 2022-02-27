import styles from '../styles/Components.module.css';
import { ToDoList, CompletedList } from '../components';

function ToDoListContainer() {
  return (
    <div>
      <ToDoList />
      <CompletedList />
    </div>
  )
}
export { ToDoListContainer };
