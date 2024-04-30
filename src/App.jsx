// This is basically main similar to C#/Java
// Highest level parent component 
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let todos = [
    "Go to the gym",
    "Eat more fruits",
    "Pick up the kids from school"
  ]
  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App;
