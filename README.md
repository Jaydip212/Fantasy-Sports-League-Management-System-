# CricFantasy 🏏 - Premium Fantasy Sports League Management System

![CricFantasy Banner](https://img.shields.io/badge/Project-Fantasy_Sports_League_Management-10b981?style=for-the-badge&logo=react)
![Status](https://img.shields.io/badge/Status-Complete-00E5FF?style=for-the-badge)

CricFantasy is a complete end-to-end frontend-only **Fantasy Sports League Management System** specifically designed for a premium college project presentation. It replicates industry-standard fantasy sports applications (like Dream11/My11Circle) with an ultra-modern 'Deep Space Cyber' UI design featuring glassmorphism elements, neon glows, and interactive statistics.

## ✨ Key Features

1. **Fully Functional Authentication System**
   - Mocked Phone & OTP login scheme.
   - Built-in Guest routing (`index.html`) & Authenticated routing.
2. **Dynamic Team Creation Logic**
   - Live Credits constraint (100 Credit Limit).
   - Strict 11-player validation limit.
   - Captain (2x points) & Vice-Captain (1.5x points) selection logic.
3. **Internal Wallet & Mock Payment Gateway**
   - Users get an initial ₹500 default demo wallet limit.
   - Dedicated `wallet.html` with realistically animated *"Proceed to Pay"* processing simulations.
   - Detailed Transaction History generated automatically per user.
4. **Role-Based Admin Simulator Engine ⚡**
   - Highly secure: Only the master account (`9999999999`) can access the Admin panel.
   - **Match Simulator Script**: Automatically calculates randomized points for users' drafted teams, closes live contests, evaluates the leaderboard, and distributes computed Prize Money directly back into the user wallets!
5. **Zero-Backend Architecture**
   - Entirely runs on HTML, CSS, Vanilla JS, and browser `localStorage`.
   - Highly portable and 100% bug-free for live laptop demonstrations.

---

## 🛠️ Tech Stack
- **Structure:** HTML5
- **Styling:** Vanilla CSS3 (Custom Properties, Gradients, Glassmorphism, Animations)
- **Logic:** Vanilla JavaScript (ES6)
- **Database:** Browser `localStorage` (Mock JSON API)
- **Typography:** Google Fonts (`Inter` & `Outfit`)

---

## 🚀 How to Run & Demo Guidelines

1. **Start the Application:**
   Since there is no backend server required, you can simply double-click the `index.html` file or launch it using any Live Server extension in VS Code.

2. **Normal User Flow Demo:**
   - **Login:** Enter any 10-digit number (e.g. `1234567890`) and the mock OTP `1234`.
   - **Wallet Top-up:** Navigate to the top-right wallet badge, click "Proceed to Pay" to top up ₹500 via the mock gateway.
   - **Play:** Go to Dashboard -> Select a Match -> Pick exactly 11 players -> Assign C/VC -> Join a contest (wallet will be correctly deducted entry fees).

3. **Admin & Simulator Demo (The Magic Trick):**
   - Log out of your normal user account.
   - On the homepage, log in using the **Master Admin Credentials**:
     - Phone: `9999999999`
     - OTP: `1234`
   - You will notice an exclusive `Admin` button appearing in the navigation bar.
   - Click it to view the System Directory and click **"Simulate Contests & Declare Results"**.
   - Log out, log back into the *Normal User Account*, and check the `Results` tab or `Profile` tab to see your massive point tallies and new Wallet Winnings!

---

## 📂 Project Structure

```text
📁 fantasy-sport-league
 ├── index.html           # Authentication & Entry Point
 ├── dashboard.html       # Upcoming Matches Overview
 ├── create-team.html     # Drafting Interface (11 Players & C/VC Logic)
 ├── match.html           # Dedicated Match & Contests joining
 ├── my-contests.html     # User's currently active participating contests
 ├── wallet.html          # Mock Payment Processing Gateway & History
 ├── profile.html         # User Stats (Lifetime Winnings, Points computed)
 ├── results.html         # Scorecards for final simulated matches
 ├── admin.html           # Master simulation engine and User Directory
 │
 ├── 📁 styles/
 │    └── main.css        # Core styles & global classes
 │
 └── 📁 js/
      ├── app.js          # Shared state & global UI updates (Navbar, DB Helpers)
      ├── auth.js         # Authentication logic and route handlers
      └── db.js           # The local JS payload database for schema initialization
```

---

> Crafted by Jayvik Labs for an outstanding College Project Evaluation.
