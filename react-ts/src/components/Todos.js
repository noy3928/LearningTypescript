"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TodoItem_1 = __importDefault(require("./TodoItem"));
//여기서는 props의 타입을 미리 정한다.
const Todos = (props) => {
    return <ul>
        {props.items.map((item) => (<TodoItem_1.default key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>))}
    </ul>;
};
exports.default = Todos;
