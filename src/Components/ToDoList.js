import React from 'react'
import ToDoListItem from '../Components/ToDoListItem'

const ToDoList = ({listToDo, onDelete, onComplete, filter}) => {

    return (
        <ul>
            {listToDo
                .filter((filterItem => filter==='showAll' ? true : filterItem.completed===false ))
                .map((item) => {
                    return ( 
                        <ToDoListItem 
                            key={item.id} 
                            item={item} 
                            onDelete={onDelete}
                            onComplete={onComplete}>
                        </ToDoListItem>
                    )
                })}
        </ul>
       
    )
}

export default ToDoList