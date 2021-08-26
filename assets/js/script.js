//New Task code

//defines the classes
var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#task-to-do");

// defines the function "createTaskHandler" that can be called back as needed.
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
}

//Event Listener - place after defining the function.
//This is the callback function - aka on a button click, create a task.
buttonEl.addEventListener("click", createTaskHandler);

