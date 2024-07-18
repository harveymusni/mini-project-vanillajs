// Import necessary modules
import { TodoApp } from './todo-app.js';
import { checkMaintenance } from './maintenance.js';

document.addEventListener('DOMContentLoaded', () => {
    const todoApp = new TodoApp();
    checkMaintenance();
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    }
});
