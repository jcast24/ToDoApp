import React from 'react'

export default function TodoCard(props) {
    const { children } = props;

    return (
        <div>
            {children}
            <li className='todoItem'></li>
        </div>
    )
}
