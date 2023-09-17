import { useState } from 'react'
function App() {
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
            </li>
          )
          }
        </ul>


      </form>
    </div>

  )
}

export default App
