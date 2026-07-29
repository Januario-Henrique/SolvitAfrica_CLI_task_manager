const taskForm= document.getElementById('task-form');
const taskInput= document.getElementById('task-input');
const listTask = document.getElementById('list-task');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInpute.value.trim();
    if (taskText !==''){
        addText(taskText);
        taskInput.value='';

    }

})

function addTask(taskText){
    const li = document.createElement('li');
    li.classLList.add('task-item');
    li.innerHTML=`
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);

}




