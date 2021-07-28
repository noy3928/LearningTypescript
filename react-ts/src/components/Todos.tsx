import React from 'react';

import Todo from "../models/todo"

//여기서는 props의 타입을 미리 정한다.
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return<ul>
        {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
        ))}
    </ul>
}

export default Todos