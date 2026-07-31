// Selecionar elementos
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Carregar tarefas quando abrir a página
document.addEventListener("DOMContentLoaded", loadTasks);

// Adicionar tarefa
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const task = {
        text: taskText,
        completed: false
    };

    addTask(task);

    taskInput.value = "";
});

// Criar tarefa na página
function addTask(task, save = true) {

    const li = document.createElement("li");
    li.classList.add("task-item");

    if (task.completed) {
        li.classList.add("completed");
    }

    li.innerHTML = `
        <span>${task.text}</span>

        <div class="task-buttons">
            <button class="complete-btn">
                ${task.completed ? "Undo" : "Complete"}
            </button>

            <button class="delete-btn">
                Delete
            </button>
        </div>
    `;

    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    // Completar tarefa
    completeBtn.addEventListener("click", function () {

        task.completed = !task.completed;

        li.classList.toggle("completed");

        completeBtn.textContent = task.completed ? "Undo" : "Complete";

        updateTask(task);

    });

    // Apagar tarefa
    deleteBtn.addEventListener("click", function () {

        li.remove();

        deleteTask(task.text);

    });

    taskList.appendChild(li);

    if (save) {
        storeTask(task);
    }
}

// Guardar tarefa
function storeTask(task) {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Carregar tarefas
function loadTasks() {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task){

        addTask(task,false);

    });

}

// Atualizar tarefa
function updateTask(updatedTask){

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task){

        if(task.text === updatedTask.text){

            task.completed = updatedTask.completed;

        }

    });

    localStorage.setItem("tasks",JSON.stringify(tasks));

}

// Apagar tarefa
function deleteTask(taskText){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(function(task){

        return task.text !== taskText;

    });

    localStorage.setItem("tasks",JSON.stringify(tasks));

}