var tasks = JSON.parse(localStorage.getItem("tasks"));
if (!tasks) {
    tasks = [];
}


for (var i = 0; i < tasks.length; i++) {
    for (var j = 0; j < tasks.length - 1; j++) {
        var dateA = tasks[j].date;
        if (!dateA) {
            dateA = "9999";
        }

        var dateB = tasks[j + 1].date;
        if (!dateB) {
            dateB = "9999";
        }

        if (dateA > dateB) {
            var temp = tasks[j];
            tasks[j] = tasks[j + 1];
            tasks[j + 1] = temp;
        }
    }
}

var listHTML = "";
if (tasks.length > 0) {
    for (var k = 0; k < tasks.length; k++) {
        var taskDate = tasks[k].date;
        if (!taskDate) {
            taskDate = "No Date";
        }

        var statusText = "";
        if (tasks[k].done == true) {
            statusText = "✔️ Completed";
        } else {
            statusText = "⏳ Pending";
        }

        listHTML += '<div class="task">';
        listHTML += '<b>📌 ' + tasks[k].text + '</b><br>';
        listHTML += '📅 ' + taskDate + ' | ' + statusText;
        listHTML += '</div>';
    }
} else {
    listHTML = "<p>No tasks found.</p>";
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