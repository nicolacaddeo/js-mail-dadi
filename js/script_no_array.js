// versione senza array

// variabili
let userFeedback = 'yes';

// ciclo
while (userFeedback == 'yes') {
    let pcDicePoints = Math.floor(Math.random() * 6) + 1;
    let userDicePoints = Math.floor(Math.random() * 6) + 1;

    // visualizzazione risultati
    console.log(`Il computer ha fatto ${pcDicePoints}`);
    console.log(`Il giocatore ha fatto ${userDicePoints}`);

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
























