 function handleLogout() {
            localStorage.removeItem("currentUser");
            document.getElementById("confirmBox").style.display = "none";
            document.getElementById("successBox").style.display = "block";
        }