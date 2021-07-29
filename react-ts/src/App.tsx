import {useState} from "react";

import Todos from "./components/Todos"
import NewTodo from "./components/NewTodo"
import './App.css';
import Todo from "./models/todo";

function App() {
  //이렇게 useState의 타입을 정해줬으면, Todo안에 있는 형식을 무조건 맞춰서 넣어주어야 한다. 
  const [todos, setTodos] = useState<Todo[]>([]);


  const addTodoHandler = (todoText:string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos)=> {
      return prevTodos.concat(newTodo)
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  };

  return (
    <div>
    <NewTodo onAddTodo={addTodoHandler}/>
    <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );




}

export default App;
