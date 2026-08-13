let taskInput = document.getElementById("task");
let taskdisplay = document.getElementById("taskdisplay");

function adding() {
    let task = taskInput.value;

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task));

    taskdisplay.appendChild(li);

    taskInput.value = "";

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.classList.add("done");
        } else {
            li.classList.remove("done");
        }
    });
}