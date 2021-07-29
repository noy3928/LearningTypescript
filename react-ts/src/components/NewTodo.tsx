import {useRef} from 'react';
import { classicNameResolver } from 'typescript';
import classes from "./NewTodo.module.css"

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)    
    //이벤트의 리스너의 종류도 타입으로 정할 수 있다. 
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        //!는 해당 타입이 너무 분명하다고 생각할 때, 사용한다. 
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            //throw an error
            return;
        }

        props.onAddTodo(enteredText);
    }

    return<form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;