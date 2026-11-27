function registerUser(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // ၁။ ယခင် Register လုပ်ထားသမျှ အကောင့်များ စာရင်းကို LocalStorage မှ ယူခြင်း
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // ၂။ Email ထပ်နေခြင်း ရှိ/မရှိ စစ်ဆေးခြင်း
    let existingUser = users.find(u => u.email === email);
    if (existingUser) {
        alert("This email is already registered! Please log in.");
        window.location.href = "login.html";
        return;
    }

    // ၃။ အကောင့်သစ်ကို စာရင်းထဲ ထည့်သွင်းခြင်း
    let newUser = {
        name: name,
        email: email,
        password: password
    };
    users.push(newUser);

    // ၄။ အကောင့်များ စာရင်းတစ်ခုလုံးကို ပြန်လည်သိမ်းဆည်းခြင်း
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", name);

    // ၅။ အကောင့်သစ်အတွက် Data အဟောင်းများကို ရှင်းထုတ်ခြင်း
    localStorage.removeItem("tasks");
    localStorage.removeItem("money");

    alert("Registration successful!");
    window.location.href = "home.html";
}