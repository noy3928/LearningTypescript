import React, {useState} from 'react';
import Todo from "../models/todo"

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC = (props) => {
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

  const contextValue: TodosContextObj = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler,
  };


    return (<TodosContext.Provider value={contextValue}>
    </TodosContext.Provider>)
}