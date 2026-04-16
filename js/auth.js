// Auth Management Logic for CricFantasy

const DEMO_OTP = "1234";

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser')) || null;
}

function loginUser(phone, otp) {
    if (otp !== DEMO_OTP) {
        return { success: false, message: "Invalid OTP (Use 1234 for demo)" };
    }
    
    // Check if user exists in DB
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => u.phone === phone);
    
    if (!user) {
        // Register new demo user
        user = {
            id: generateId(),
            name: "Demo Player",
            phone: phone,
            walletBalance: 500 // Start with 500 demo coins
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    // Set active session
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, user: user };
}

function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Redirects if not logged in
function requireAuth() {
    if (!getCurrentUser()) {
        window.location.href = 'index.html';
    }
}

// Redirects to dashboard if already logged in
function requireGuest() {
    if (getCurrentUser()) {
        window.location.href = 'dashboard.html';
    }
}
