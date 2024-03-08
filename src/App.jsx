import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
function App()
{
  // let todoitems=[                            initial data
  //   {name:"Buy milk", date:"3/10/2024"},
  //   {name:"Go to college", date:"3/10/2024"},
  // ];
  const [items,setNewItems]=useState([]);
  const handleAddButton=(itemName,itemDate)=>
  {
    let newItems=[...items,{name: itemName, date: itemDate}];
    setNewItems(newItems);
  };
  const handleDeleteButton=(itemName)=>
  {
    let newItems=items.filter((item)=>item.name!=itemName);
    setNewItems(newItems);
  }
  return <center className="todo-container">
    <AppName></AppName>
    <div className="table">
      <AppTodo handleAddButton={handleAddButton}></AppTodo>
      {items.length===0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoitems={items} handleDeleteButton={handleDeleteButton}></TodoItems>
    </div>
  </center>
}
export default App;