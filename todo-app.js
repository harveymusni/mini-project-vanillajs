import { TodoItem } from './todo-item.js';

export class TodoApp {
    constructor() {
        this.todoList = JSON.parse(localStorage.getItem('todos')) || [];
        this.todoForm = document.getElementById('todo-form');
        this.todoInput = document.getElementById('todo-input');
        this.todoListElement = document.getElementById('todo-list');

        this.todoForm.addEventListener('submit', this.addTodo.bind(this));
        this.renderTodos();
    }

    addTodo(event) {
        event.preventDefault();
        const todoText = this.todoInput.value.trim();
        if (todoText) {
            this.todoList.push(todoText);
            this.saveTodos();
            this.renderTodos();
            this.todoInput.value = '';
        }
    }

    deleteTodo(index) {
        this.todoList.splice(index, 1);
        this.saveTodos();
        this.renderTodos();
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todoList));
    }

    renderTodos() {
        this.todoListElement.innerHTML = '';
        this.todoList.forEach((todo, index) => {
            const todoItem = document.createElement('todo-item');
            todoItem.setAttribute('text', todo);
            todoItem.addEventListener('delete', () => this.deleteTodo(index));
            this.todoListElement.appendChild(todoItem);
        });
    }
}
