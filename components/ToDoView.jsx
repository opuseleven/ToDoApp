function ToDoView({ todo }) {

  return (
    <div key={todo.id}>
      <h4>{todo.name}</h4>
      <p>{todo.completed}</p>
    </div>
  )
}
export { ToDoView };
