const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks on startup
document.addEventListener("DOMContentLoaded", loadTasks);

// Add task
addBtn.addEventListener("click", addTask);

// Add task with Enter key
taskInput.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){
    const text = taskInput.value.trim();

    if(text === ""){
        alert("Please enter a task");
        return;
    }

    const task = {
        text: text,
        completed: false
    };

    createTask(task);
    saveTask(task);

    taskInput.value = "";
}

function createTask(task){
    const li = document.createElement("li");

    if(task.completed){
        li.classList.add("completed");
    }

    li.innerHTML = `
        <span>${task.text}</span>

        <div class="task-buttons">
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;

    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateTask(task.text);
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
        deleteTask(task.text);
    });

    taskList.appendChild(li);
}

function saveTask(task){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTask(task);
    });
}

function deleteTask(taskText){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(task => task.text !== taskText);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTask(taskText){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.map(task => {
        if(task.text === taskText){
            task.completed = !task.completed;
        }
        return task;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}