// Shared application logic

// Updates the wallet balance in UI
function updateWalletUI() {
    const user = getCurrentUser();
    if (user) {
        const walletEl = document.getElementById('wallet-balance');
        if (walletEl) {
            walletEl.innerText = `₹${user.walletBalance}`;
        }
    }
}

// Render dynamic navbar
function renderNavbar() {
    const user = getCurrentUser();
    const navHTML = `
        <nav class="navbar">
            <div class="container nav-container">
                <a href="dashboard.html" class="logo text-gradient">CricFantasy</a>
                ${user ? `
                    <div class="nav-links">
                        <a href="dashboard.html" class="nav-link">Home</a>
                        <a href="my-contests.html" class="nav-link">My Contests</a>
                        <a href="results.html" class="nav-link">Results</a>
                        <a href="profile.html" class="nav-link">Profile</a>
                        <a href="points-system.html" class="nav-link">Rules</a>
                        ${user.phone === '9999999999' ? '<a href="admin.html" class="nav-link" style="color: var(--accent-danger);">Admin</a>' : ''}
                        <a href="wallet.html" class="wallet-badge" title="Demo Wallet" style="text-decoration:none;">
                            <span>🪙</span> <span id="wallet-balance">₹${user.walletBalance}</span>
                        </a>
                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 0.85rem;" onclick="logoutUser()">Logout</button>
                    </div>
                ` : `
                    <div class="nav-links">
                        <a href="index.html" class="nav-link">Login</a>
                    </div>
                `}
            </div>
        </nav>
    `;
    
    // insert right after body open
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// Deduct wallet balance for contests
function deductBalance(amount, desc = 'Contest Entry Fee') {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = getCurrentUser();
    if (!user) return false;
    
    if (user.walletBalance >= amount) {
        user.walletBalance -= amount;
        
        // update user in DB
        let userIndex = users.findIndex(u => u.id === user.id);
        if (userIndex !== -1) {
            users[userIndex] = user;
            localStorage.setItem('users', JSON.stringify(users));
        }
        
        // update active session
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Add Transaction
        let txList = getTransactions();
        txList.push({
            id: Date.now(),
            userId: user.id,
            type: 'debit',
            amount: amount,
            desc: desc,
            date: new Date().toISOString()
        });
        localStorage.setItem('transactions', JSON.stringify(txList));
        
        updateWalletUI();
        return true;
    }
    return false;
}

// Update DB when a user earns points (Demo sim)
function simulateMatchPoints() {
    // A simple function for demo to just randomise points for teams if not calculated
    let userTeams = getUserTeams();
    let updated = false;
    userTeams.forEach(team => {
        if (!team.totalPoints) {
            team.totalPoints = Math.floor(Math.random() * 500) + 200; // random demo points between 200 and 700
            updated = true;
        }
    });
    
    if (updated) {
        localStorage.setItem('user_teams', JSON.stringify(userTeams));
    }
}

function getTransactions() {
    return JSON.parse(localStorage.getItem('transactions')) || [];
}
