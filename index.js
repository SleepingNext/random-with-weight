/*
    Author: Kevin Veros Hamonangan
    Notes: The Author learns the algorithm from Coding Math video on YouTube.
    Link: https://www.youtube.com/watch?v=MGTQWV1VfWk&ab_channel=CodingMath
*/

// List of prizes.
const prizes = [{
    prize: "Bubble Gum",
    chance: 0.8,
    counter: 0,
}, {
    prize: "Brown Sugar Boba Milk Tea",
    chance: 0.1,
    counter: 0,
}, {
    prize: "T-Shirt",
    chance: 0.065,
    counter: 0,
}, {
    prize: "Xiaomi Mi Band 6",
    chance: 0.034,
    counter: 0,
}, {
    prize: "Apple iPhone 13 Pro Max",
    chance: 0.001,
    counter: 0,
}];

// Randomize the prize with weight.
function getPrize() {
    let total = 0;
    for (let i = 0; i < prizes.length; i++) {
        total += prizes[i].chance;
    }

    let rand = Math.random() * total;

    for (let i = 0; i < prizes.length; i++) {
        let prize = prizes[i];
        if (rand < prize.chance) {
            prize.counter++;
            return;
        }

        rand -= prize.chance;
    }
}

// Simulate 10000 tries.
for (let i = 0; i < 10000; i++) {
    getPrize();
}

// Log the results.
for (let i = 0; i < prizes.length; i++) {
    let prize = prizes[i];
    console.log(prize.prize + ": " + prize.counter);
}