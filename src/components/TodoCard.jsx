import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, handleEditTodo, index } = props;

    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => { handleDeleteTodo(index) }}>Delete</button>
                <button onClick={() => { handleEditTodo(index) }}>Edit</button>
            </div>
        </li>
    )
}
