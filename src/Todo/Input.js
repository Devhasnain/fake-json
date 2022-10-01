import React, { useContext, useState } from 'react'
import { DataProvider } from './App';

function Input() {
    const {todoItems,setTodoItems}=useContext(DataProvider);
    const [text,setText]=useState('');
    const handleubmit=(e)=>{
        e.preventDefault();
        setTodoItems([...todoItems,text]);
        setTimeout(() => {
          setText('');
        }, 300);
    }; 
  return (
    <div className=''>
        <form onSubmit={handleubmit}>
            <textarea rows={8} style={{width:"50%",margin:'auto'}} required placeholder='add text' value={text} onChange={(e)=>{setText(e.target.value)}}/><br/>
        <div >
          <ul>
            <li>paragraph length: {text.length}</li>
            <li>paragraph words: {text.split('').filter(item=>item===' ').length}</li>
          </ul>
        </div>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Input;
