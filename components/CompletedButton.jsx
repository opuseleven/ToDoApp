import { updateCompleted } from '../services';
import styles from '../styles/Components.module.css';
import { useState, useEffect } from 'react';

function CompletedButton({ todo }) {

  const [checked, setChecked] = useState(todo.completed);

  useEffect(() => {
    updateCompleted(todo, checked);
  }, [checked])

  return (
    <div>
      <input type="checkbox" id="completedbutton" checked={checked} onChange={() => setChecked(!checked)} className={styles.checkbox} />
    </div>
  )
}
export { CompletedButton };
