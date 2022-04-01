import { CompletedButton } from '../components';
import { useState, useEffect } from 'react';
import { updateToDo } from '../services';

function ToDoView({ todo }) {

  const [name, setName] = useState(todo.name);

  useEffect(() => {
    updateToDo(todo, name);
  }, [name])

  return (
    <div key={todo.id}>
      <CompletedButton todo={todo} />
      <input type="text" value={name} onChange={() => setName(event.target.value)} />
      <p>{todo.completed}</p>
    </div>
  )
}
export { ToDoView };
