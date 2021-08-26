//New Task code

//defines the classes
var formEl = document.querySelector("#task-form");
var taskstodoEl = document.querySelector("#tasks-to-do");


// defines the function "createTaskHandler" that can be called back as needed.
var createTaskHandler = function(event) { //insert event here when we need to pause the browser
    event.preventDefault(); // This code prevents browser refresh
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");

    //give it a class name
    taskInfoEl.className = "task-info";

    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    taskstodoEl.appendChild(listItemEl);
  };

//Event Listener - place after defining the function.
//This is the callback function - aka on a button click, create a task.
formEl.addEventListener("submit", createTaskHandler);