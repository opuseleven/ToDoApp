import styles from '../styles/Components.module.css';
import { ToDoView } from '../components';

function CompletedList({ completedlist }) {
  return (
    <div>
      completedlist && (
        {
          completedlist.map(t => (
            <div key={t.id}>
              <ToDoView todo={t} />
            </div>
          ))
        }
      )
    </div>
  )
}
export { CompletedList };
