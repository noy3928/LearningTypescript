"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const todo_1 = __importDefault(require("../models/todo"));
const TodosContext = react_1.default.createContext({
    items: [],
    addTodo: () => { },
    removeTodo: (id) => { }
});
const TodosContextProvider = (props) => {
    //이렇게 useState의 타입을 정해줬으면, Todo안에 있는 형식을 무조건 맞춰서 넣어주어야 한다. 
    const [todos, setTodos] = react_1.useState([]);
    const addTodoHandler = (todoText) => {
        const newTodo = new todo_1.default(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };
    const removeTodoHandler = (todoId) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    };
    const contextValue = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };
    return value = { contextValue } >
        /TodosContext.Provider>);
};
