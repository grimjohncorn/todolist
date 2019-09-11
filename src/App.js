import React from 'react';
import { useState } from 'react'
import './App.css';
import ToDoList from './Components/ToDoList'
import backgroundImg from './Images/background-todo.jpg'

const App = () => {
  const [list, setList] = useState([])
  const [formState, setFormState] = useState({nameInput: '', filter: 'showAll'})
  const [idCount, setIdCount] = useState(1)

  

  const handleChange = (event) => {
    const {value, name} = event.target
    setFormState(state => {return {...state, [name]: value}})
  }

  const onClick = (event) => {
    event.preventDefault()
    if(formState.nameInput.trim() !== '') {
      setList(state => [...state,{id: idCount+1, name: formState.nameInput, completed: false}])
      setFormState(state => {return {...state, nameInput: ''}})
      setIdCount(idCount + 1)
    }
  }

  const onDelete = (id) => {
    setList(state => state.filter((item) => item.id!==id))
  }

  const onComplete = (id) => {
    setList(state => state.map(item => item.id===id ? {...item, completed: !item.completed} : item))
  }

  return (
    <div className="App">
      
      <div id='titleHero'>
        <h1>To Do List</h1>
        <div id='backgroundImg' style={{backgroundImage: `url(${backgroundImg})`}}></div>
      </div>

      <form id='topForm'>
        <input
          className='formControl'
          name='nameInput' 
          type='text' 
          placeholder='enter name' 
          value={formState.nameInput} 
          onChange={handleChange}>
        </input>
        <button onClick={onClick}>Add Item</button>
      </form>
      

      <div id='listContainer'>
        <ToDoList listToDo={list} onDelete={onDelete} onComplete={onComplete} filter={formState.filter}/> 
      </div>
      
      <form>
        <div id='radioButtons'>
          <label className='formControl'>Show All
            <input id='radioShowAll' type='radio' name='filter' value='showAll' checked={formState.filter==='showAll'} onChange={handleChange}/>
          </label>

          <label className='formControl'>Hide Completed
            <input id='radioNotComplete' type='radio' name='filter' value='showNotComplete' checked={formState.filter==='showNotComplete'} onChange={handleChange} />
          </label>
        </div>
      </form>     
    </div>
  );
}

export default App;