let taskItems = [];
let timeItems = [];
let priorityItems = [];

let taskNum = 0;

//Inputs
let taskInputField = document.getElementById('taskInputField');
let priorityInputDrop = document.getElementById('priorityDropDown');
let timeInputDrop = document.getElementById('timeDropDown');

//Page Containers
let inputPageContainer = document.getElementById('input-page-container');
let taskPageContainer = document.getElementById('task-page-container');
let comlpetedPageContainer = document.getElementById('complete-page-container');
let finishedPageContainer = document.getElementById('finished-page-container')

//Input Page Containers
let taskContainer = document.getElementById('taskContainer');
let priorityContainer = document.getElementById('priorityContainer');
let timeContainer = document.getElementById('timeContainer');

//Completed Task Page Containers


//Buttons
let addTaskButton = document.getElementById('addTaskButton');
let beginUnwhelmButton = document.getElementById('beginUnwhelmButton');
let completeTaskButton = document.getElementById('completeTaskButton');
let startAgainButton = document.getElementById('startAgainButton');

//Hide containers initially
taskPageContainer.style.display = 'none';
comlpetedPageContainer.style.display = 'none';
finishedPageContainer.style.display = 'none';


//Function for when the add task button is clicked
addTaskButton.addEventListener('click', function(){

    //add task input to task list
    var taskListContents = document.createElement('h2');
    taskListContents.innerText = taskInputField.value;
    taskContainer.appendChild(taskListContents);

    //add priority input to priority list
    var priorityListContents = document.createElement('h2');
    priorityListContents.innerText = priorityInputDrop.value;
    priorityContainer.appendChild(priorityListContents);

    //add time input to time list
    var timeListContents = document.createElement('h2');
    timeListContents.innerText = timeInputDrop.value;
    timeContainer.appendChild(timeListContents);

    //add inputs to arrays
    taskItems[taskNum] = taskInputField.value;
    priorityItems[taskNum] = priorityInputDrop.value;
    timeItems[taskNum] = timeInputDrop.value;

    //reset input field tro be blank
    document.getElementById("taskInputField").value = "";

    //add one to tasknum
    taskNum += 1;
})

//task page variables
let currentTaskNameCol = document.getElementById('current-task-name-column');
let currentPriorityCol = document.getElementById('current-task-priority-column');
let currentTimeCol = document.getElementById('current-task-time-column');

let counterVar = 0;
let counterVar2 = 2;

//Function for when the begin unwhelming button is clicked
beginUnwhelmButton.addEventListener('click', function(){
    //hide and display containers
    inputPageContainer.style.display = 'none';
    taskPageContainer.style.display = 'block';

    //add info to page
    var currentTaskName = document.createElement('h2');
    currentTaskName.innerText = taskItems[counterVar];
    currentTaskNameCol.appendChild(currentTaskName);

    var currentPriorityName = document.createElement('h2');
    currentPriorityName.innerText = priorityItems[counterVar];
    currentPriorityCol.appendChild(currentPriorityName);

    var currentTimeName = document.createElement('h2');
    currentTimeName.innerText = timeItems[counterVar];
    currentTimeCol.appendChild(currentTimeName);

    counterVar += 1;
})

let currentTaskContainer = document.getElementById('current-task-container');
//Function for when the complete task button is clicked
completeTaskButton.addEventListener('click', function(){
    comlpetedPageContainer.style.display = 'block';
    currentTaskContainer.style.backgroundColor = 'rgb(219,234,213)';
    completeTaskButton.style.backgroundColor = 'rgb(219,234,213)';
})

let nextTaskButton = document.getElementById('nextTaskButton');

//Function for when next task button is selected
nextTaskButton.addEventListener('click', function(){
    comlpetedPageContainer.style.display = 'none';
    currentTaskContainer.style.backgroundColor = 'rgb(209,226,241)';
    completeTaskButton.style.backgroundColor = 'rgb(255, 250, 201)';

    //remove info from page
    currentTaskNameCol.removeChild(currentTaskNameCol.lastElementChild);
    currentPriorityCol.removeChild(currentPriorityCol.lastElementChild);
    currentTimeCol.removeChild(currentTimeCol.lastElementChild);
    
    //add info to page
    var currentTaskName = document.createElement('h2');
    currentTaskName.innerText = taskItems[counterVar];
    currentTaskNameCol.appendChild(currentTaskName);

    var currentPriorityName = document.createElement('h2');
    currentPriorityName.innerText = priorityItems[counterVar];
    currentPriorityCol.appendChild(currentPriorityName);

    var currentTimeName = document.createElement('h2');
    currentTimeName.innerText = timeItems[counterVar];
    currentTimeCol.appendChild(currentTimeName);

    counterVar += 1;

    if (counterVar2 > taskNum){
        taskPageContainer.style.display = 'none';
        comlpetedPageContainer.style.display = 'none';
        finishedPageContainer.style.display = 'block';
    }
    else{
        counterVar2 += 1;
    }
    
})