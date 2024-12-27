document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    // Add new to-do
    addButton.addEventListener('click', () => {
      const task = todoInput.value.trim();
  
      if (task) {
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
  
        const taskText = document.createElement('span');
        taskText.textContent = task;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
  
        // Delete task
        deleteButton.addEventListener('click', () => {
          todoList.removeChild(listItem);
        });
  
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
  
        todoInput.value = '';
      }
    });
  });
  