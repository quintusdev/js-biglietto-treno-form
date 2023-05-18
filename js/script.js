// DATA ENTRY DA PARTE DELL'UTENTE

//DICHIARAZIONE VARIABILI

const costo_km = 0.21;

//NOME E COGNOME UTENTE
let submitBtn = document.getElementById('submitButton');

//CONTROLLO CHE IL PULSANTE NON SIA NULL

submitBtn.addEventListener('click', function(){

    let user_name = document.getElementById('nome-utente').value;

    let km = document.getElementById('km').value;

    let eta = document.getElementById('eta').value;

    let carrozza = Math.floor(Math.random() * 10 + 1 );

    let codcp = Math.floor(Math.random() * 10000 + 1 );

    if (eta == 'minorenne' && km > 0) {
        let costo = (km * costo_km * 0.8);
        let type_offer = 'Offerta Minorenni';

        document.getElementById('nome_utente_bigl').innerHTML = `${user_name}`;
        document.getElementById('type_offer').innerHTML = `${type_offer}`;
        document.getElementById('carrozza').innerHTML = `${carrozza}`;
        document.getElementById('codcp').innerHTML = `${codcp}`;
        document.getElementById('costo').innerHTML = `${costo.toFixed(2) + "€"}`;

    } else if (eta == 'over65' && km > 0){

        let costo = (km * costo_km * 0.4);
        let type_offer = 'Offerta Over 65 anni';

        document.getElementById('nome_utente_bigl').innerHTML = `${user_name}`;
        document.getElementById('type_offer').innerHTML = `${type_offer}`;
        document.getElementById('carrozza').innerHTML = `${carrozza}`;
        document.getElementById('codcp').innerHTML = `${codcp}`;
        document.getElementById('costo').innerHTML = `${costo.toFixed(2) + "€"}`;

    } else if (eta == 'maggiorenne' && km > 0) {

        let costo = (km * costo_km);
        let type_offer = 'Prezzo Biglietto Intero';

        document.getElementById('nome_utente_bigl').innerHTML = `${user_name}`;
        document.getElementById('type_offer').innerHTML = `${type_offer}`;
        document.getElementById('carrozza').innerHTML = `${carrozza}`;
        document.getElementById('codcp').innerHTML = `${codcp}`;
        document.getElementById('costo').innerHTML = `${costo.toFixed(2) + "€"}`;
    }
})