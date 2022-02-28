function CompletedButton({ completed }) {

  function handleChange() {
    
  }

  return (
    <div>
      <input type="checkbox" id="completedbutton" checked={completed} onChange={handleChange} />
    </div>
  )
}
export { CompletedButton };
