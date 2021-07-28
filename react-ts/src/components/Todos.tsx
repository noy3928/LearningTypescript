import React from 'react';

//여기서는 props의 타입을 미리 정한다.
const Todos: React.FC<{items: string[]}> = (props) => {
    return<ul>
        {props.items.map((item) => (
        <li key={item}>{item}</li>
        ))}
    </ul>
}

export default Todos