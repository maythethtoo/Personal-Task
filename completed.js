
var tasks = JSON.parse(localStorage.getItem("tasks"));
if (!tasks) {
    tasks = [];
}

var doneTasks = [];
for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].done == true) {
        doneTasks.push(tasks[i]);
    }
}

var listHTML = "";

if (doneTasks.length > 0) {
    for (var j = 0; j < doneTasks.length; j++) {
        var taskDate = doneTasks[j].date;
        if (!taskDate) {
            taskDate = "No Date";
        }

        var priorityText = doneTasks[j].priority;
        if (priorityText == "Low") priorityText = "Priority: Low";
        else if (priorityText == "Medium") priorityText = "Priority: Medium";
        else if (priorityText == "High") priorityText = "Priority: High";

        listHTML += '<div class="task">';
        listHTML += '<b>✔️ ' + doneTasks[j].text + '</b><br>';
        listHTML += '<small>📅 ' + taskDate + ' | ' + priorityText + '</small>';
        listHTML += '</div>';
    }
} else {
    listHTML = "No completed tasks yet 🎯";
}

document.getElementById("list").innerHTML = listHTML;


let user = localStorage.getItem("currentUser") || "User Profile";
document.getElementById("userDisplay").innerHTML = "👤 " + user;


function toggleSidebar() {
    const sidebar = document.querySelector('.side');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}