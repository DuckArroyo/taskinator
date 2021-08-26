//New Task code

//defines the classes
var formEl = document.querySelector("#task-form");
var taskstodoEl = document.querySelector("#tasks-to-do");


// defines the function "createTaskHandler" that can be called back as needed.
var createTaskHandler = function(event) { //insert event here when we need to pause the browser

    event.preventDefault(); // This code prevents browser refresh
    console.log(event);
  
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskstodoEl.appendChild(listItemEl);
  };

//Event Listener - place after defining the function.
//This is the callback function - aka on a button click, create a task.
formEl.addEventListener("submit", createTaskHandler);

