// Static mock data for CricFantasy
const initialData = {
    matches: [
        {
            id: 1,
            team1: "IND",
            team2: "AUS",
            team1Name: "India",
            team2Name: "Australia",
            date: "Today, 7:30 PM",
            status: "upcoming"
        },
        {
            id: 2,
            team1: "ENG",
            team2: "NZ",
            team1Name: "England",
            team2Name: "New Zealand",
            date: "Tomorrow, 3:00 PM",
            status: "upcoming"
        },
        {
            id: 3,
            team1: "SA",
            team2: "PAK",
            team1Name: "South Africa",
            team2Name: "Pakistan",
            date: "Tomorrow, 8:00 PM",
            status: "upcoming"
        }
    ],
    contests: [
        { id: 101, matchId: 1, name: "Mega Contest", type: "Mega", entryFee: 49, totalSpots: 10000, filledSpots: 4500, prizePool: "₹5,00,000" },
        { id: 102, matchId: 1, name: "Head to Head", type: "H2H", entryFee: 299, totalSpots: 2, filledSpots: 1, prizePool: "₹500" },
        { id: 103, matchId: 1, name: "Winner Takes All", type: "Mega", entryFee: 99, totalSpots: 100, filledSpots: 45, prizePool: "₹8,000" },
        { id: 201, matchId: 2, name: "Mega Contest", type: "Mega", entryFee: 39, totalSpots: 5000, filledSpots: 1200, prizePool: "₹1,50,000" },
    ],
    players: [
        // IND vs AUS match players
        { id: 1001, matchId: 1, name: "V. Kohli", team: "IND", role: "BAT", credits: 10, form: "9.5" },
        { id: 1002, matchId: 1, name: "R. Sharma", team: "IND", role: "BAT", credits: 9.5, form: "8.5" },
        { id: 1003, matchId: 1, name: "H. Pandya", team: "IND", role: "AR", credits: 9.0, form: "8.0" },
        { id: 1004, matchId: 1, name: "J. Bumrah", team: "IND", role: "BOWL", credits: 9.0, form: "9.0" },
        { id: 1005, matchId: 1, name: "K. Rahul", team: "IND", role: "WK", credits: 8.5, form: "7.5" },
        { id: 1006, matchId: 1, name: "S. Yadav", team: "IND", role: "BAT", credits: 9.0, form: "8.8" },
        { id: 1007, matchId: 1, name: "R. Jadeja", team: "IND", role: "AR", credits: 8.5, form: "8.2" },
        { id: 1008, matchId: 1, name: "M. Siraj", team: "IND", role: "BOWL", credits: 8.0, form: "7.9" },
        
        { id: 2001, matchId: 1, name: "S. Smith", team: "AUS", role: "BAT", credits: 9.5, form: "8.0" },
        { id: 2002, matchId: 1, name: "D. Warner", team: "AUS", role: "BAT", credits: 9.0, form: "8.2" },
        { id: 2003, matchId: 1, name: "G. Maxwell", team: "AUS", role: "AR", credits: 9.5, form: "9.2" },
        { id: 2004, matchId: 1, name: "P. Cummins", team: "AUS", role: "BOWL", credits: 9.0, form: "8.5" },
        { id: 2005, matchId: 1, name: "M. Starc", team: "AUS", role: "BOWL", credits: 9.0, form: "8.8" },
        { id: 2006, matchId: 1, name: "A. Carey", team: "AUS", role: "WK", credits: 8.0, form: "7.5" },
        { id: 2007, matchId: 1, name: "M. Marsh", team: "AUS", role: "AR", credits: 8.5, form: "8.0" },
        { id: 2008, matchId: 1, name: "J. Hazlewood", team: "AUS", role: "BOWL", credits: 8.5, form: "8.0" },
    ]
};

// Seed LocalStorage
function initDB() {
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
