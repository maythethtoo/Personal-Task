var money = JSON.parse(localStorage.getItem("money"));
if (!money) {
    money = [];
}

function add() {
    var type = document.getElementById("type").value;
    var amount = Number(document.getElementById("amount").value);
    var category = document.getElementById("category").value;
    var date = document.getElementById("date").value;

    if (amount === 0 || category.trim() === "") {
        alert("Please fill in all required details!");
        return;
    }

    var newItem = {
        type: type,
        amount: amount,
        category: category,
        date: date
    };

    money.push(newItem);
    localStorage.setItem("money", JSON.stringify(money));

    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";

    show();
}

function show() {
    var income = 0;
    var expense = 0;

    for (var i = 0; i < money.length; i++) {
        if (money[i].type === "income") {
            income += money[i].amount;
        } else if (money[i].type === "expense") {
            expense += money[i].amount;
        }
    }

    var balance = income - expense;
    document.getElementById("in").innerText = income.toLocaleString() + " MMK";
    document.getElementById("out").innerText = expense.toLocaleString() + " MMK";
    document.getElementById("bal").innerText = balance.toLocaleString() + " MMK";

    var listHTML = "";

    for (var j = money.length - 1; j >= 0; j--) {
        var item = money[j];

        var itemType = "💸 Expense";
        if (item.type === "income") {
            itemType = "💵 Income";
        }

        var itemDate = item.date;
        if (!itemDate) {
            itemDate = "No Date 📅";
        }

        listHTML += '<div class="money">';
        listHTML += '<div>';
        listHTML += '<b>' + itemType + '</b><br>';
        listHTML += item.category + ' | ' + itemDate;
        listHTML += '</div>';
        listHTML += '<b>' + item.amount.toLocaleString() + ' MMK</b>';
        listHTML += '</div>';
    }

    document.getElementById("list").innerHTML = listHTML;
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