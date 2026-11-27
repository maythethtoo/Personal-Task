var tasks = JSON.parse(localStorage.getItem("tasks"));
if (!tasks) {
    tasks = [];
}

function add() {
    var text = document.getElementById("text").value;
    var priority = document.getElementById("priority").value;
    var date = document.getElementById("date").value;

    if (text.trim() === "") {
        alert("Please enter a task name!");
        return;
    }

    var newTask = {
        text: text,
        priority: priority,
        date: date,
        done: false
    };

    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("text").value = "";
    document.getElementById("date").value = "";
    show();
}

function show() {
    var html = "";

    for (var i = 0; i < tasks.length; i++) {
        var x = tasks[i];

        var titleText = x.text;
        if (x.done == true) {
            titleText = "✔️ " + x.text;
        }

        var taskDate = x.date;
        if (!taskDate) {
            taskDate = "No Date 📅";
        }

        var btnText = "Done";
        if (x.done == true) {
            btnText = "Undo";
        }

        var priorityText = x.priority;
        if (x.priority == "Low") priorityText = "Priority: Low";
        else if (x.priority == "Medium") priorityText = "Priority: Medium";
        else if (x.priority == "High") priorityText = "Priority: High";

        html += '<div class="task">';
        html += '<div>';
        html += '<b>' + titleText + '</b><br>';
        html += '<small>' + priorityText + ' | 📅 ' + taskDate + '</small>';
        html += '</div>';
        html += '<div>';
        html += '<button class="done" onclick="done(' + i + ')">' + btnText + '</button> ';
        html += '<button class="delete" onclick="del(' + i + ')">Delete</button>';
        html += '</div>';
        html += '</div>';
    }

    document.getElementById("tasks").innerHTML = html;
}

function done(i) {
    if (tasks[i].done == true) {
        tasks[i].done = false;
    } else {
        tasks[i].done = true;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    show();
}

function del(i) {
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    show();
}

show();


let user = localStorage.getItem("currentUser") || "User Profile";
document.getElementById("userDisplay").innerHTML = "👤 " + user;


function toggleSidebar() {
    const sidebar = document.querySelector('.side');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}