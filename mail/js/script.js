// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!

// Chiedo la mail all'utente
const userMail = prompt(`Dimmi la tua email`);
console.log(userMail);

// Lista di email
const mail = [`pino.mail.com`, `jonny.mail.com`, `arturo.mail.com`, `pippo.mail.com`];
console.log(mail);

// Confronto mail utente nella mia lista mail
let mailFound = false;

for (let i = 0; i < mail.length; i++) {
    const mailPc = mail[i];
    if (userMail === mailPc) {
        mailFound = true;
    }
}

// Se la mail datami dall'utente la trovo nella mia lista lo avverto che è registrata 
// in caso contrario gli dico che non è registrata
if (mailFound === true) {
    alert(`la tua mail è registrata`)
} else {
    alert(`la tua mail non è registrata`)
}
console.log(mailFound);