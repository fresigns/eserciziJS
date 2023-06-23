// esercizio 1. 
// definire una funzione 'pow' che NON faccia uso dell'operatore '**'
// ne della libreria Math
// -----------------------------------------------------------------------------

function pow(base, esponente) {
    let risultatoEsponente = 1;
    for (let i = 0; i < esponente; i++) {
      risultatoEsponente *= base;
    }
    return risultatoEsponente;
  }
  
  let risultatoEsponente = pow(2, 3); // pow(base, esponente)
  console.log(risultatoEsponente);
  
// La funzione pow ha due parametri: base e esponente

// La base rappresenta il numero di partenza,
// l'esponente indica quante volte la base deve essere moltiplicata per se stessa.

// All'inizio della funzione, viene dichiarata una variabile chiamata risultatoEsponente 
// e viene inizializzata con il valore 1. 
// Questo sarà il valore iniziale del risultato della potenza.

// Viene utilizzato un ciclo for per iterare esponente volte. 
// All'inizio del ciclo, i viene inizializzato a 0.
// La condizione i < esponente specifica che il ciclo deve continuare finché i è minore di esponente. 
// Dopo ogni iterazione del ciclo, i viene incrementato di 1 (i++).

// All'interno del ciclo, la base viene moltiplicata per il valore corrente di risultatoEsponente 
// e il risultato viene assegnato nuovamente a risultatoEsponente. 


// Una volta completato il ciclo, il valore finale di risultatoEsponente viene restituito come risultato della funzione.
//   Fuori dalla funzione, viene chiamata la funzione esponente con i valori 2 come base e 3 come esponente. 
// Il risultato viene quindi stampato sulla console utilizzando console.log.

// la funzione esponente calcola la potenza di un numero moltiplicando la base per se stessa l'esponente volte. 
// Ad esempio, se chiami la funzione esponente(2, 3), otterrai 2 * 2 * 2, che è uguale a 8.
// prende due parametri, calcola la potenza della base elevata all'esponente
// assegna al risultato la variabile risultatoEsponente
// stampando il risultato sulla console del browser 