// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero per l'utente
let user = Math.floor(Math.random() * 6) +1;
console.log(user);

// Genero un numero per il pc
let pc = Math.floor(Math.random() * 6) +1;
console.log(pc);

// il numero più alto vince
let winner;
if (user > pc) {
    winner = `L'utente ha vinto`;
} else if (pc > user) {
    winner = `Il pc ha vinto`;
} else{
    winner = `Pareggio`;
}
alert (winner);
console.log(winner);

