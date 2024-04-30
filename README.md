# Basic React ToDo app

Creating a basic ToDo app using React and React state hook to be able to create a list of things that we need to get done!

This is primarily for learning and to have a better understanding of React, React useState, and useEffect. 

Code from before:

```jsx
import { useState } from 'react'
function App() {
  // Similar to C#/Java getters and setters
  const [newItem, setNewItems] = useState("");
  const [items, setItems] = useState([])

  const handleInputChange = (event) => {
    setNewItems(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();

    if (!newItem) {
      alert("Please enter an item!")
      return;
    }
    const newObj = {
      id: items.length + 1,
      value: newItem
    }
    setItems(oldList => [...oldList, newObj]);
    setNewItems("");
  }

  const deleteItems = (id) => {
    const newArr = items.filter(item => item.id !== id);
    setItems(newArr);
  }

  return (
    <div className='container'>
      <h1 className='header-title'>TODO</h1>
      <form onSubmit={addTodo} className='form-el'>
        <input
          className='input-el'
          value={newItem}
          onChange={handleInputChange}
        /><button className='button-el'>Add</button>

        <ul>

          {items.map(item =>
            <li key={item.id}>
              {item.value}<button className='delete-btn' onClick={() => deleteItems(item.id)}>X</button>
            </li>)
          }
        </ul>
      </form>
    </div>

  )
}

export default App
```

