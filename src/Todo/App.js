import React, { createContext, useState, useEffect } from 'react';
import List from './List';
import Input from './Input'

export const DataProvider = createContext();
function App() {
  const [todoItems, setTodoItems] = useState(list);
  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todoItems))
  }, [todoItems]);
  const handleDelete = (e) => {
    let newArr = todoItems.filter((item) => {
      return item !== todoItems[e.target.value]
    });
    setTodoItems(newArr);
  }
  return (
    <>
      <DataProvider.Provider value={{ todoItems, setTodoItems, handleDelete }}>
        <Input />
        <List />
      </DataProvider.Provider>
    </>
  );
}

export default App;
const list = () => {
  let a = localStorage.getItem('todolist');
  if (a) {
    return JSON.parse(a);
  } else {
    return [];
  };
};