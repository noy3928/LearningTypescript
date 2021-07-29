import React from 'react';

import TodoItem from './TodoItem';
import Todo from "../models/todo"
import classes from "./Todos.module.css"

//여기서는 props의 타입을 미리 정한다.
const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return<ul>
        {props.items.map((item) => (
        <TodoItem 
            key={item.id} 
            text={item.text} 
            onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>
        ))}
    </ul>
}

export default Todos