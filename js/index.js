const input = document.getElementById("todo-input");
const addButton = document.querySelector("button");
const todoList = document.getElementById("todo-lists");

function addTask() {
    const taskText = input.value.trim();
    if (taskText !== "" && taskText.length < 50) {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <i class="fa fa-trash delete-icon"></i> <i class="fa fa-check">`;
        todoList.appendChild(li);
        input.value = "";
    } else {
        alert("Input is too big or empty!")
    }
}

// handle task actions plm
function handleTaskAction(e) {
    if (e.target.classList.contains("delete-icon")) {
        const task = e.target.parentElement;
        todoList.removeChild(task);
        console.log("Delete icon clicked");
    } else if (e.target.classList.contains("fa-check")) {
        const task = e.target.parentElement;
        const icon = e.target;

        if (!task.style.textDecoration || task.style.textDecoration === "none") {
            task.style.textDecoration = "line-through";
            task.style.color = "gray";
            icon.classList.remove("fa-check");
            icon.classList.add("fa-x");
            console.log("Task marked as complete");
        } else {
            task.style.textDecoration = "none";
            task.style.color = "black";
            icon.classList.remove("fa-x");
            icon.classList.add("fa-check");
            console.log("Task marked as incomplete");
        }
    }
}

addButton.addEventListener("click", addTask);
todoList.addEventListener("click", handleTaskAction);