document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Función para agregar tarea
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            // Botón para marcar como completada
            const completeButton = document.createElement('button');
            completeButton.textContent = '✔️';
            completeButton.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Botón para eliminar tarea
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(completeButton);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = ''; // Limpiar el input
        }
    });
});
