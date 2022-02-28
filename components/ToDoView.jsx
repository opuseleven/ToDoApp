import { CompletedButton } from '../components';

function ToDoView({ todo }) {

  return (
    <div key={todo.id}>
      <CompletedButton completed={todo.completed} />
      <h4>{todo.name}</h4>
      <p>{todo.completed}</p>
    </div>
  )
}
export { ToDoView };
