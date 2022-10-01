import React, { useContext, useEffect, useState } from 'react';
import { DataProvider } from './App';

function List() {
    const {todoItems,handleDelete}=useContext(DataProvider);
    const [value,setValue]=useState(false);
    useEffect(()=>{
        if (todoItems.length<1) {
            setValue(false);
        } else {
            setValue(true);
        }
    },[todoItems]);
  return (
    <div>
        <ul>
            {value? todoItems.map((item,index)=>{
                return (
                    <li key={index}>{item} <button style={{marginLeft:"20px"}} value={index} onClick={handleDelete}>Delete</button> </li>
                )
            }):"List is empty"}
        </ul>
    </div>
  )
}

export default List
