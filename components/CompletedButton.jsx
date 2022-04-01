import { updateCompleted } from '../services';

import { useState, useEffect } from 'react';

function CompletedButton({ todo }) {

  const [checked, setChecked] = useState(todo.completed);

  useEffect(() => {
    updateCompleted(todo, checked);
  }, [checked])

  return (
    <div>
      <input type="checkbox" id="completedbutton" checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  )
}
export { CompletedButton };
