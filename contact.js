document.addEventListener("DOMContentLoaded", function () {
    // Load currentUser from localStorage or set default
    const currentUser = localStorage.getItem("currentUser") || "User Profile";
    const userDisplay = document.getElementById("userDisplay");

    if (userDisplay) {
        userDisplay.innerHTML = "👤 " + currentUser;
    }
});

// Sidebar Toggle Functionality
function toggleSidebar() {
    const sidebar = document.querySelector('.side');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}