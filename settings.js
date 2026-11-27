

function dark() {
    document.body.classList.toggle("dark");
}
function clearData() {
    var isConfirm = confirm("Are you sure you want to delete all data?");
    
    if (isConfirm === true) {
        localStorage.clear();
        alert("All data has been deleted successfully!");
        window.location.reload();
    }
}


let user = localStorage.getItem("currentUser") || "User Profile";
document.getElementById("userDisplay").innerHTML = "👤 " + user;


function toggleSidebar() {
    const sidebar = document.querySelector('.side');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}