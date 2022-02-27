import styles from '../styles/Components.module.css';
import { ToDoView } from '../components';

function CompletedList({ completedlist }) {
  return (
    <div>
      completedlist && (
        {
          completedlist.map(t => (
            <ToDoView todo={t} />
          ))
        }
      )
    </div>
  )
}
export { CompletedList };
