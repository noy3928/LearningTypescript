"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todos_1 = __importDefault(require("./components/Todos"));
const NewTodo_1 = __importDefault(require("./components/NewTodo"));
require("./App.css");
function App() {
    return (<div>
    <NewTodo_1.default onAddTodo={addTodoHandler}/>
    <Todos_1.default items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>);
}
exports.default = App;
