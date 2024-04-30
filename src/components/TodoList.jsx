import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos } = props;

    // We're passing in handleDeleteTodo, but we need it in TodoCard
    // we pass in {...props} into TodoCard

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        {...props}
                        key={todoIndex}
                        index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )

}
