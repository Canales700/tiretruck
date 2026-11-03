// Login System for TireTrack - Canales Tire Shop

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Default admin credentials
    if (username === "admin" && password === "admin123") {
        alert("✅ Welcome, Admin!");
        window.location.href = "#dashboard";
    } else {
        alert("❌ Incorrect username or password. Try again.");
    }
}

// Show login form, hide dashboard
function showLogin() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('dashboardSection').style.display = 'none';
}

// Logout function
function logout() {
    alert("✅ Logged out successfully.");
    showLogin();
}

// When page loads
window.onload = function() {
    console.log("✅ TireTrack Script Loaded");
};
