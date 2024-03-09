import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoItems from "./Components/TodoItems";
import { useReducer } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
const todoItemsReducer=(currItems,action)=>
{
  let newItems=currItems;
  if(action.type==='NEW_ITEM'){
    newItems=[...currItems,{name: action.payload.itemName, date: action.payload.Date}];
  }
  else if(action.type==='DELETE_ITEM'){
    newItems=currItems.filter((item)=>item.name!=action.payload.itemName);
  }
  return newItems;
}
function App()
{
  const [items,dispatchTodoItems]=useReducer(todoItemsReducer,[]);
  const handleAddButton=(itemName,itemDate)=>
  {
    const newItemAction={
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      }
    }
    dispatchTodoItems(newItemAction);
  };
  const handleDeleteButton=(itemName)=>
  {
    const deleteItemAction={
      type: "DELETE_ITEM",
      payload: {
        itemName,
      }
    }
    dispatchTodoItems(deleteItemAction);
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