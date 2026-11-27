document.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.getElementById('get-started-btn');

    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            // Default User Session သတ်မှတ်ခြင်း
            const defaultUser = { name: "User", isLoggedIn: true };
            localStorage.setItem('currentUser', JSON.stringify(defaultUser));

            // Home Page (index.html) ဆီ တိုက်ရိုက် ရောက်သွားစေခြင်း
            window.location.href = 'C:\Users\hp\Desktop\Personal Task\html\home.html'; 
        });
    }
});