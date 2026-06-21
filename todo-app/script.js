// Todo App with Local Storage
class TodoApp {
    constructor() {
        this.todos = this.loadFromLocalStorage() || [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.render();
    }

    cacheDOM() {
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todosList = document.getElementById('todosList');
        this.emptyState = document.getElementById('emptyState');
        this.clearBtn = document.getElementById('clearBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.totalTasksEl = document.getElementById('totalTasks');
        this.completedTasksEl = document.getElementById('completedTasks');
        this.remainingTasksEl = document.getElementById('remainingTasks');
    }

    bindEvents() {
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        this.clearBtn.addEventListener('click', () => this.clearCompleted());
        this.resetBtn.addEventListener('click', () => this.resetAll());
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.closest('.filter-btn')));
        });
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        
        if (text === '') {
            this.showNotification('Please enter a task!', 'warning');
            return;
        }

        if (text.length < 3) {
            this.showNotification('Task must be at least 3 characters!', 'warning');
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        this.todos.unshift(newTodo);
        this.saveToLocalStorage();
        this.todoInput.value = '';
        this.todoInput.focus();
        this.render();
        this.showNotification('Task added successfully!', 'success');
    }

    deleteTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            const deletedTodo = this.todos.splice(index, 1)[0];
            this.saveToLocalStorage();
            this.render();
            this.showNotification(`"${deletedTodo.text}" deleted!`, 'success');
        }
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToLocalStorage();
            this.render();
        }
    }

    clearCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        
        if (completedCount === 0) {
            this.showNotification('No completed tasks to clear!', 'warning');
            return;
        }

        if (confirm(`Delete ${completedCount} completed task(s)?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveToLocalStorage();
            this.render();
            this.showNotification(`${completedCount} task(s) cleared!`, 'success');
        }
    }

    resetAll() {
        if (this.todos.length === 0) {
            this.showNotification('No tasks to reset!', 'warning');
            return;
        }

        if (confirm('Are you sure? This will delete ALL tasks!')) {
            this.todos = [];
            this.saveToLocalStorage();
            this.render();
            this.showNotification('All tasks deleted!', 'success');
        }
    }

    setFilter(btn) {
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.dataset.filter;
        this.render();
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    renderTodos() {
        const filtered = this.getFilteredTodos();
        this.todosList.innerHTML = '';

        if (filtered.length === 0) {
            this.emptyState.classList.add('show');
            return;
        }

        this.emptyState.classList.remove('show');

        filtered.forEach(todo => {
            const todoEl = document.createElement('div');
            todoEl.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            todoEl.innerHTML = `
                <input 
                    type="checkbox" 
                    class="checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    data-id="${todo.id}"
                >
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <div class="todo-actions">
                    <button class="delete-btn" data-id="${todo.id}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            `;

            const checkbox = todoEl.querySelector('.checkbox');
            checkbox.addEventListener('change', () => this.toggleTodo(todo.id));

            const deleteBtn = todoEl.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => this.deleteTodo(todo.id));

            this.todosList.appendChild(todoEl);
        });
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const remaining = total - completed;

        this.totalTasksEl.textContent = total;
        this.completedTasksEl.textContent = completed;
        this.remainingTasksEl.textContent = remaining;
    }

    render() {
        this.renderTodos();
        this.updateStats();
    }

    saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromLocalStorage() {
        try {
            const data = localStorage.getItem('todos');
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading from local storage:', error);
            return [];
        }
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: ${type === 'success' ? '#48bb78' : type === 'warning' ? '#ed8936' : '#f56565'};
            color: white;
            border-radius: 8px;
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add animations to stylesheet if not exists
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new TodoApp();
    });
} else {
    new TodoApp();
}