import styles from '../styles/Components.module.css';
import { ToDoList, CompletedList } from '../components';
import { getSortedLists } from '../services';

function ToDoListContainer({ list }) {

  const sortedLists = getSortedLists(list);

  return (
    <div>
      <ToDoList todolist={sortedLists.todoArr} />
      <CompletedList completedlist={sortedLists.completedArr} />
    </div>
  )
}
export { ToDoListContainer };
