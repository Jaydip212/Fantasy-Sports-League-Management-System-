// Static mock data for CricFantasy - IPL Edition
const initialData = {
    matches: [
        {
            id: 1,
            team1: "CSK",
            team2: "MI",
            team1Name: "Chennai Super Kings",
            team2Name: "Mumbai Indians",
            date: "Today, 7:30 PM",
            status: "upcoming"
        },
        {
            id: 2,
            team1: "RCB",
            team2: "KKR",
            team1Name: "Royal Challengers Bengaluru",
            team2Name: "Kolkata Knight Riders",
            date: "Tomorrow, 3:30 PM",
            status: "upcoming"
        },
        {
            id: 3,
            team1: "RR",
            team2: "SRH",
            team1Name: "Rajasthan Royals",
            team2Name: "Sunrisers Hyderabad",
            date: "Tomorrow, 7:30 PM",
            status: "upcoming"
        }
    ],
    contests: [
        { id: 101, matchId: 1, name: "Mega Contest", type: "Mega", entryFee: 49, totalSpots: 50000, filledSpots: 45000, prizePool: "₹1.5 Crores" },
        { id: 102, matchId: 1, name: "Head to Head", type: "H2H", entryFee: 299, totalSpots: 2, filledSpots: 1, prizePool: "₹500" },
        { id: 103, matchId: 1, name: "Winner Takes All", type: "Mega", entryFee: 99, totalSpots: 100, filledSpots: 89, prizePool: "₹8,000" },
        { id: 201, matchId: 2, name: "Mega Contest", type: "Mega", entryFee: 39, totalSpots: 25000, filledSpots: 12000, prizePool: "₹75 Lakhs" },
    ],
    players: [
        // CSK vs MI Match Players (22 Players)
        { id: 1001, matchId: 1, name: "R. Gaikwad", team: "CSK", role: "BAT", credits: 9.5, form: "9.0" },
        { id: 1002, matchId: 1, name: "S. Dube", team: "CSK", role: "BAT", credits: 9.0, form: "8.8" },
        { id: 1003, matchId: 1, name: "D. Mitchell", team: "CSK", role: "AR", credits: 8.5, form: "8.0" },
        { id: 1004, matchId: 1, name: "R. Jadeja", team: "CSK", role: "AR", credits: 9.0, form: "9.0" },
        { id: 1005, matchId: 1, name: "MS Dhoni", team: "CSK", role: "WK", credits: 8.5, form: "8.5" },
        { id: 1006, matchId: 1, name: "A. Rahane", team: "CSK", role: "BAT", credits: 8.0, form: "7.8" },
        { id: 1007, matchId: 1, name: "M. Pathirana", team: "CSK", role: "BOWL", credits: 9.0, form: "9.5" },
        { id: 1008, matchId: 1, name: "D. Chahar", team: "CSK", role: "BOWL", credits: 8.5, form: "7.9" },
        { id: 1009, matchId: 1, name: "S. Thakur", team: "CSK", role: "BOWL", credits: 8.0, form: "8.0" },
        { id: 1010, matchId: 1, name: "R. Ravindra", team: "CSK", role: "AR", credits: 8.5, form: "8.2" },
        { id: 1011, matchId: 1, name: "M. Theekshana", team: "CSK", role: "BOWL", credits: 8.0, form: "8.1" },
        
        { id: 2001, matchId: 1, name: "R. Sharma", team: "MI", role: "BAT", credits: 9.5, form: "9.2" },
        { id: 2002, matchId: 1, name: "I. Kishan", team: "MI", role: "WK", credits: 9.0, form: "8.5" },
        { id: 2003, matchId: 1, name: "S. Yadav", team: "MI", role: "BAT", credits: 10.0, form: "9.8" },
        { id: 2004, matchId: 1, name: "T. Varma", team: "MI", role: "BAT", credits: 8.5, form: "8.6" },
        { id: 2005, matchId: 1, name: "H. Pandya", team: "MI", role: "AR", credits: 9.5, form: "8.8" },
        { id: 2006, matchId: 1, name: "T. David", team: "MI", role: "BAT", credits: 8.5, form: "8.0" },
        { id: 2007, matchId: 1, name: "R. Shepherd", team: "MI", role: "AR", credits: 8.0, form: "7.5" },
        { id: 2008, matchId: 1, name: "J. Bumrah", team: "MI", role: "BOWL", credits: 9.5, form: "9.6" },
        { id: 2009, matchId: 1, name: "G. Coetzee", team: "MI", role: "BOWL", credits: 8.5, form: "8.7" },
        { id: 2010, matchId: 1, name: "P. Chawla", team: "MI", role: "BOWL", credits: 8.0, form: "8.0" },
        { id: 2011, matchId: 1, name: "A. Madhwal", team: "MI", role: "BOWL", credits: 8.0, form: "7.9" },
    ]
};

// Seed LocalStorage
function initDB() {
    // Auto-wipe everything if the user was on the old International data
    if (!localStorage.getItem('is_ipl_loaded')) {
        localStorage.clear();
        localStorage.setItem('is_ipl_loaded', 'true');
    }

    if (!localStorage.getItem('matches')) {
        localStorage.setItem('matches', JSON.stringify(initialData.matches));
    }
    if (!localStorage.getItem('contests')) {
        localStorage.setItem('contests', JSON.stringify(initialData.contests));
    }
    if (!localStorage.getItem('players')) {
        localStorage.setItem('players', JSON.stringify(initialData.players));
    }
    if (!localStorage.getItem('joined_contests')) {
        localStorage.setItem('joined_contests', JSON.stringify([]));
    }
    if (!localStorage.getItem('user_teams')) {
        localStorage.setItem('user_teams', JSON.stringify([]));
    }
    if (!localStorage.getItem('transactions')) {
        localStorage.setItem('transactions', JSON.stringify([]));
    }
}

// Global getters
function getMatches() { return JSON.parse(localStorage.getItem('matches')) || []; }
function getContests() { return JSON.parse(localStorage.getItem('contests')) || []; }
function getPlayers() { return JSON.parse(localStorage.getItem('players')) || []; }
function getJoinedContests() { return JSON.parse(localStorage.getItem('joined_contests')) || []; }
function getUserTeams() { return JSON.parse(localStorage.getItem('user_teams')) || []; }

// Helper
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Call on load
initDB();
