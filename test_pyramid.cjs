const tiersCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data = [];
let userIndex = 0;

// Mock 55 visible users
let visibleUsers = Array.from({ length: 55 }).map((_, i) => ({ rank: i + 1, name: "User " + (i + 1) }));

for (let i = 0; i < tiersCount.length; i++) {
    const tierSize = tiersCount[i];
    const tierUsers = [];
    for (let j = 0; j < tierSize; j++) {
        if (userIndex < visibleUsers.length) {
            tierUsers.push(visibleUsers[userIndex]);
            userIndex++;
        }
    }
    if (tierUsers.length > 0) {
        data.push(tierUsers);
    }
}

console.log("Tier 0:", data[0]);
console.log("Tier 1:", data[1]);
console.log("Total Tiers:", data.length);
