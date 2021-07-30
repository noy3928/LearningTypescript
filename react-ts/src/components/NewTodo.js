"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const NewTodo_module_css_1 = __importDefault(require("./NewTodo.module.css"));
const NewTodo = (props) => {
    const todoTextInputRef = react_1.useRef(null);
    //이벤트의 리스너의 종류도 타입으로 정할 수 있다. 
    const submitHandler = (event) => {
        event.preventDefault();
        //!는 해당 타입이 너무 분명하다고 생각할 때, 사용한다. 
        const enteredText = todoTextInputRef.current.value;
        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }
        props.onAddTodo(enteredText);
    };
    return <form onSubmit={submitHandler} className={NewTodo_module_css_1.default.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>;
};
exports.default = NewTodo;
