export default function TodoInput(props) {
  const { handleUpdateTodos, todoValue, setTodoValue } = props;

  // onChange listens to changes made on the input
  // whenever the value of the input changes, it calls this function
  // which receives an event. 

  // e.target.value is the new text that gets entered in the TodoInput

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => { setTodoValue(e.target.value) }}
        placeholder="Enter todo"
      />
      <button onClick={() => {
        handleUpdateTodos(todoValue)
        setTodoValue('');
      }}>Add</button>
    </header>
  )
}
