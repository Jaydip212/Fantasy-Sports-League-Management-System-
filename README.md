# CricFantasy 🏏 - Premium Fantasy Sports League Management System

![CricFantasy Banner](https://img.shields.io/badge/Project-Fantasy_Sports_League_Management-10b981?style=for-the-badge&logo=react)
![Status](https://img.shields.io/badge/Status-Complete-00E5FF?style=for-the-badge)

CricFantasy is a complete end-to-end frontend-only **Fantasy Sports League Management System** specifically designed for a premium college project presentation. It comprehensively replicates industry-standard fantasy sports applications (like Dream11/My11Circle) with an ultra-modern 'Deep Space Cyber' UI design featuring glassmorphism elements, neon glows, and interactive statistics.

## ✨ Dream11 Replica Features Included

1. **Fully Functional Authentication System**
   - Mocked Phone & OTP login scheme.
   - Built-in Guest routing (`index.html`) & Authenticated routing.
2. **Advanced Team Creation & Player Data**
   - Live Credits constraint (100 Credit Limit).
   - Strict 11-player validation limit.
   - Captain (2x points) & Vice-Captain (1.5x points) selection logic.
   - **Player Info Modals:** Clicking a player dynamically displays dummy live stats, form graphs, generated UI avatars, and selection percentages!
3. **Internal Wallet & E-Commerce**
   - Users get an initial ₹500 default demo wallet limit.
   - Dedicated `wallet.html` with realistically animated *"Proceed to Pay"* processing simulations.
   - **KYC & Withdrawals:** Includes a mock KYC verification flow requiring users to simulate Aadhaar/PAN upload before processing withdrawals. 
4. **Live Leaderboards**
   - Track joined contests in `my-contests.html`.
   - Dedicated `contest-leaderboard.html` perfectly simulating live match leaderboards, dynamically placing real users alongside generated "bot" opponents and visually displaying ranks with mock real-money prizes based on calculated points.
5. **Comprehensive IPL Schedule & Live Scores**
   - Handles the entire IPL schedule featuring generic algorithm-driven dummy player generation. 
   - Dynamically rendering "Live Match" scorecards (e.g., "CSK 150/4") directly on the dashboard and match lobbies!
6. **Role-Based Admin Simulator Engine ⚡**
   - Secure Admin Access (Phone: `9999999999`).
   - Match Simulator Script: Automatically calculates randomized points, runs leaderboards, and distributes prize money into the user wallet.

## 🛠️ Tech Stack
- **Structure:** HTML5
- **Styling:** Vanilla CSS3 (Custom Properties, Gradients, Glassmorphism, Animations)
- **Logic:** Vanilla JavaScript (ES6)
- **Database:** Browser `localStorage` (Uses complex auto-seeding generators to populate player states)
- **Typography:** Google Fonts (`Inter` & `Outfit`)

## 🚀 How to Run & Demo Guidelines

1. **Start the Application:**
   Since there is no backend server required, you can simply double-click the `index.html` file or launch it using any Live Server extension in VS Code.

2. **Normal User Flow Demo:**
   - **Login:** Enter any 10-digit number (e.g. `1234567890`) and the mock OTP `1234`.
   - **Play:** Go to Dashboard -> Select the "LIVE" Match -> Click a player to see their modal -> Pick exactly 11 players -> Assign C/VC -> Join a contest.
   - **Wallet:** Go to Wallet -> Click "Withdraw Winnings" -> Experience the "Pending KYC" workflow.
   - **Leaderboard:** Go to "My Contests" -> Click the contest card -> See the generated opponent ranking list!

3. **Admin & Simulator Demo (The Magic Trick):**
   - Log out of your normal user account.
   - On the homepage, log in using the **Master Admin Credentials**:
     - Phone: `9999999999`
     - OTP: `1234`
   - You will notice an exclusive `Admin` button appearing in the navigation bar.
   - Click it to view the System Directory and click **"Simulate Contests & Declare Results"**.
   - Log out, log back into the *Normal User Account*, and your leaderboards and wallets will reflect actual points!

---

> Crafted by Jayvik Labs for an outstanding College Project Evaluation.
