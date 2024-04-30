// This is basically main similar to C#/Java
// Highest level parent component 
import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  // creating a stateful variable
  // react state
  // basically a variable that the user is going to interact with
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  // persist the data 
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }


  // useEffects takes in a callback function and a dependency array
  // if you want it to listen to the change of a variable, you pass in the variable into the array
  // for example, todos
  // if you want to run it on pageload, leave it as an empty array
  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')

    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos);

  }, [])

  // to update the todos, have to use setTodos
  function handleUpdateTodos(newTodo) {
    const newTodosList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodosList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    })
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleUpdateTodos={handleUpdateTodos}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  )
}

export default App;
