"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_module_css_1 = __importDefault(require("./TodoItem.module.css"));
const TodoItem = (props) => {
    return <li className={TodoItem_module_css_1.default.item} onClick={props.onRemoveTodo}>{props.text}</li>;
};
exports.default = TodoItem;
