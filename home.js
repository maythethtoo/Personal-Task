var tasks = JSON.parse(localStorage.getItem("tasks"));
if (!tasks) {
    tasks = [];
}

var money = JSON.parse(localStorage.getItem("money"));
if (!money) {
    money = [];
}

var totalTasks = tasks.length;
var doneTasks = 0;

for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].done == true) {
        doneTasks = doneTasks + 1;
    }
}

var pendingTasks = totalTasks - doneTasks;
var income = 0;
var expense = 0;
for (var j = 0; j < money.length; j++) {
    if (money[j].type == "income") {
        income = income + money[j].amount;
    } else if (money[j].type == "expense") {
        expense = expense + money[j].amount;
    }
}
var balance = income - expense;

var percent = 0;
if (totalTasks > 0) {
    percent = Math.round((doneTasks / totalTasks) * 100);
}

document.getElementById("total").innerText = totalTasks;
document.getElementById("done").innerText = doneTasks;
document.getElementById("pending").innerText = pendingTasks;

document.getElementById("income").innerText = income.toLocaleString() + " MMK";
document.getElementById("expense").innerText = expense.toLocaleString() + " MMK";
document.getElementById("balance").innerText = balance.toLocaleString() + " MMK";

document.getElementById("bar").style.width = percent + "%";
document.getElementById("percent").innerText = percent + "% Completed";

var listHTML = "";
var start = tasks.length - 1;
var count = 0;
for (var k = start; k >= 0; k--) {
    if (count < 5) {
        var taskDate = tasks[k].date;
        if (!taskDate) {
            taskDate = "No Date"; 
        }
        
        listHTML = listHTML + '<div class="task">📌 ' + tasks[k].text + ' — 📅 ' + taskDate + '</div>';
        count = count + 1;
    }
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

function toggleUserDropdown() {
    document.getElementById("userDropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.user-dropdown-btn') && !event.target.matches('.user-dropdown-btn *')) {
        var dropdowns = document.getElementsByClassName("user-dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}