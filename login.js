document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault(); 
        
        let emailInput = document.getElementById("email").value.trim();
        let passwordInput = document.getElementById("password").value;

        
        let users = JSON.parse(localStorage.getItem("users")) || [];

      
        let validUser = users.find(u => u.email === emailInput && u.password === passwordInput);

        if (validUser) {
            localStorage.setItem("currentUser", validUser.name);
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Invalid email or password! If you don't have an account, please register first.");
        }
    });