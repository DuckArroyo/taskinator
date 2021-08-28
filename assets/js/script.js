//New Task code
var taskIdCounter = 0;

//defines the classes
var formEl = document.querySelector("#task-form");
var taskstodoEl = document.querySelector("#tasks-to-do");

// defines the function "taskFormHandler" that can be called back as needed.
var taskFormHandler = function(event) { //insert event here when we need to pause the browser
    event.preventDefault(); // This code prevents browser refresh
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //Checks if the form has content
    if (!taskNameInput || !taskTypeInput) {
      alert("You need to fill out the task form!");
      return false;
    }

   // formEl.requestFullscreen();//! Opens full screen

    // package data as an obj
    var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
    };

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};
//Event Listener - place after defining the function.
//This is the callback function - aka on a button click, create a task.
formEl.addEventListener("submit", taskFormHandler);

//Create the task and it's attributes. also Appends to task counter id and to do.
var createTaskEl = function(taskDataObj) {
  //create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //add task id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  //create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  //give it a class name
  taskInfoEl.className = "task-info";

  //add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);

  //add entire list item to list
  taskstodoEl.appendChild(listItemEl);

  // increase task counter for next unique id
  taskIdCounter++;
};

//Create the buttons for the task
var createTaskActions = function(taskId) {
  var actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task actions";

  //create edit button
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Edit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.setAttribute("data-task-id", taskId);

  actionContainerEl.appendChild(editButtonEl);
  
  //create delete button
  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id", taskId);

  var statusSelectEl = document.createElement("select");
  statusSelectEl.className = "select-status";
  statusSelectEl.setAttribute("name", "status-change");
  statusSelectEl.setAttribute("data-task-id", taskId);

  actionContainerEl.appendChild(statusSelectEl);

  actionContainerEl.appendChild(deleteButtonEl);

  var statusChoices = ["To Do", "In Progress", "Completed"];

  for (var i = 0; i < statusChoices.length; i++) {
    // create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);
  
    // append to select
    statusSelectEl.appendChild(statusOptionEl);
  }
  
  return actionContainerEl;
};

//this function idemtified the clicked delete button
var taskButtonHandler = function(event) {
  //get target element from event
  var targetEl = event.target;
  console.log(event.target);

  //!Edit button target function starts
  if (targetEl.matches(".edit-btn")) {
    var taskId = targetEl.getAttribute("data-task-id");
    editTask(taskId);
  }
  //!Edit button target function ends

  //!Delete button target function starts
  else if (targetEl.matches(".delete-btn")) {
    var taskId = targetEl.getAttribute("data-task-id");
    deleteTask(taskId);
  }
  //!Delete button target function ends
};

// this function follows the "task button handler" and performs the edit action
var editTask = function(taskId) {
  console.log("editin task #" + taskId);

  //get task list item element
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  console.log(taskSelected + " is being edited");

  //get content from task name and type
  var taskName = taskSelected.querySelector("h3.task-name").textContent;
  console.log(taskName);
  var taskType = taskSelected.querySelector("span.task-type").textContent;
  console.log(taskType);
  //
  document.querySelector("input[name='task-name']").value = taskName;
  document.querySelector("select[name='task-type']").value = taskType;
  document.querySelector("#save-task").textContent = "Save Task";
};

//this function follows the "task button handler" and performs the delete action
var deleteTask = function(taskId) {
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  console.log(taskSelected + " has been deleted");
  taskSelected.remove();
};

var pageContentEl = document.querySelector("#page-content");
// other logic...
pageContentEl.addEventListener("click", taskButtonHandler);