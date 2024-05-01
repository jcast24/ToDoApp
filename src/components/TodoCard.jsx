import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, handleEditTodo, index } = props;

    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button className='deleteBtn' onClick={() => { handleDeleteTodo(index) }}>Delete</button>
                <button className='editBtn' onClick={() => { handleEditTodo(index) }}>Edit</button>
            </div>
        </li>
    )
}
