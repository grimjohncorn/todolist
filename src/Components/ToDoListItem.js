import React from 'react'

const ToDoListItem = ({item, onDelete, onComplete}) => {
    
    return (
        <li className={item.completed ? 'completedItem' : 'notCompletedItem'} onClick={() => onComplete(item.id)}>
            <h3>{item.name}</h3>
            <button id='deleteButton' onClick={() => onDelete(item.id)}>X</button>  
        </li>
    )
}

export default ToDoListItem