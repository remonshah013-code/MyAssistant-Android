
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task first.");
    return;
  }

  const li = document.createElement("li");

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  const doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  doneButton.style.marginLeft = "8px";

  doneButton.addEventListener("click", function () {
    taskLabel.style.textDecoration =
      taskLabel.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "8px";
  deleteButton.style.background = "#dc2626";

  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(taskLabel);
  li.appendChild(doneButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);
  taskInput.value = "";
  taskInput.focus();
});

// Basic study helper demo
const askButton = document.getElementById("askButton");
const questionInput = document.getElementById("question");
const answer = document.getElementById("answer");

askButton.addEventListener("click", function () {
  const question = questionInput.value.trim();

  if (!question) {
    answer.textContent = "Please enter a question first.";
    return;
  }

  answer.textContent =
    "Your question is: " + question +
    ". This is a demo assistant. Real AI answers require connecting an AI service.";
});
