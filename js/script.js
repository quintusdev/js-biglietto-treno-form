//CALCOLO PREZZO BIGLIETTO TRENO

//RICHIESTA KM DA PERCORRERE COL IL TRENO

let km_utente = parseInt(prompt('Quanti chilometri devi percorrere?').trim());

//RICHIESTA INSERIMENTO ETA' UTENTE

let eta_utente = parseInt(prompt('Quanti anni hai?').trim());

//CREAZIONE COSTANTE COSTO AL KM 

const costo_km = 0.21;

//CALCOLO COSTO BIGLIETTO INTERO

let prezzo_int = (km_utente * costo_km);
let prezzo_intero = prezzo_int.toFixed(2);

//CREZIONE VARIABILI PER CALCOLO SCONTO

let sconto_min;
let over;
let prezzo_scont1;
let prezzo_scont2;

//CALCOLO EVENTUALE SCONTO E VISUALIZZAZIONE PREZZO FINALE

if (eta_utente < 18) {
    
        sconto_min = (prezzo_intero * 20 / 100);
        prezzo_scont1 = (prezzo_intero - sconto_min);

        //CONVERSIONE IN DECIMALE A 2 CIFRE
    let prezzo_scontato1 = prezzo_scont1.toFixed(2);

        //VISUALIZZA PREZZO SCONTATO MINORENNI FINALE
    alert("Il prezzo del tuo biglietto e' di: "+ prezzo_scontato1 + " €.");

} else if (eta_utente >= 65) {

    over = (prezzo_intero * 40 / 100);
    prezzo_scont2 = (prezzo_intero - over);

        //CONVERSIONE IN DECIMALE A 2 CIFRE
    let prezzo_scontato2 = prezzo_scont2.toFixed(2);
        
        //VISUALIZZA PREZZO TOTALE OVER 65 FINALE
    alert("Il prezzo del tuo biglietto e' di: " + prezzo_scontato2 +" €.");
} else {

        //VISUALIZZA PREZZO INTERO FINALE
    alert("Il prezzo del tuo biglietto e' di: " + prezzo_intero +" €.");
}

