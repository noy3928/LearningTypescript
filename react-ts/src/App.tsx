import {useState} from "react";

import Todos from "./components/Todos"
import NewTodo from "./components/NewTodo"
import './App.css';
import Todo from "./models/todo";

function App() {
  

  return (
    <div>
    <NewTodo onAddTodo={addTodoHandler}/>
    <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );




}

export default App;
