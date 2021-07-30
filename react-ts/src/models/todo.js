"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor(todoText) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}
exports.default = Todo;
