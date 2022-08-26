// versione senza array

// variabili
let pcDicePoints = Math.floor(Math.random() * 6) + 1;
let userDicePoints = Math.floor(Math.random() * 6) + 1;
let userFeedback = 'yes';

// visualizzazione risultati
console.log(`Il computer ha fatto ${pcDicePoints}`);
console.log(`Il giocatore ha fatto ${userDicePoints}`);

// ciclo
while (userFeedback == 'yes') {
    if (pcDicePoints > userDicePoints) {
        console.log('Il computer vince!');
    } else if (pcDicePoints == userDicePoints) {
        console.log('Pareggio!');
    } else {
        console.log('Hai vinto!');
    }
    userFeedback = prompt('vuoi continuare? yes or no');
    if (userFeedback == 'no') {
        console.log('gioco terminato');
    }
}





















