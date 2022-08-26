// versione con array
let pcDicePoints;
let userDicePoints;

function getRandomValue(array) {
    let randomValue = Math.floor(Math.random() * array.length);
    let points = array[randomValue];
    return points;
}

const dicePoints = [1, 2, 3, 4, 5, 6];

pcDicePoints = getRandomValue(dicePoints);
userDicePoints = getRandomValue(dicePoints);

console.log(`Il computer ha fatto ${pcDicePoints}`);
console.log(`Il giocatore ha fatto ${userDicePoints}`);

if (pcDicePoints > userDicePoints) {
    console.log('Il computer vince!');
} else if (pcDicePoints == userDicePoints) {
    console.log('Pareggio!');
} else {
    console.log('Hai vinto!');
}