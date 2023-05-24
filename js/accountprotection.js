// Check login status
const isLoggedIn = sessionStorage.getItem("isLoggedIn");

// If user is not logged in, redirect to login.html
if (!isLoggedIn) {
    window.location.href = "login.html";
}