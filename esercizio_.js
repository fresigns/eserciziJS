function parteIniziale(frase, lunghezza) {
    if (frase.length < lunghezza) {
      return frase;
    } else {
      let parte = frase.slice(0, lunghezza);
      return parte + '...';
    }
  }
  
  let risultato = parteIniziale("La casa rosa", 8);
  console.log(risultato);
  

// Definisce una funzione chiamata parteIniziale che accetta due parametri: frase e lunghezza.
// La funzione verifica se la lunghezza della frase è inferiore alla lunghezza specificata. 
// Se è così, restituisce la frase originale senza modifiche.
// Se la lunghezza della frase è maggiore o uguale alla lunghezza specificata, 
// la funzione prende una porzione della frase usando il metodo slice. La porzione inizia dall'indice 0 e si estende fino all'indice lunghezza - 1.
// Aggiunge i puntini di sospensione alla fine della porzione ottenuta usando l'operatore di concatenazione +.
// Restituisce la porzione con i puntini di sospensione.
// Fuori dalla funzione, viene chiamata parteIniziale con la frase "La casa rosa" e la lunghezza 8. 
// Il risultato viene assegnato alla variabile risultato.
// Infine, il valore di risultato viene stampato nella console utilizzando console.log.
// Il codice prende una frase e una lunghezza specificata e restituisce una versione abbreviata della frase 
// se la sua lunghezza supera la lunghezza specificata, aggiungendo puntini di sospensione alla fine. 
// Altrimenti, restituisce la frase originale senza modifiche. 

// Nell'esempio, "La casa rosa" ha una lunghezza maggiore di 8, 
// quindi viene restituita la porzione iniziale "La casa..." come risultato.