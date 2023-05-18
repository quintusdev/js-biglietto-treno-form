//DICHIARAZIONE VARIABILI
const costo_km = 0.21;

//NOME E COGNOME UTENTE
const submitBtn = document.getElementById('submitButton');

//BOTTONE RESET DATI INSERITI
const button_annulla = document.getElementById('button_annulla');

//CONTROLLO CHE IL PULSANTE NON SIA NULL
submitBtn.addEventListener('click', function(){
    //DICHIARAZIONI VARIABILI E INSERIMENTO INPUT DA HTML
    let user_name = document.getElementById('nome-utente').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    let carrozza = Math.floor(Math.random() * 10 + 1 );
    let codcp = Math.floor(Math.random() * 10000 + 1 );
    //CALCOLO COSTO BIGLIETTO SCONTATO
    if (eta == 'minorenne' && km > 0) {
        let costo = (km * costo_km * 0.8);
        document.getElementById('costo').innerHTML = `${costo.toFixed(2) + "€"}`;
    } else if (eta == 'over65' && km > 0){
        let costo = (km * costo_km * 0.4);
        document.getElementById('costo').innerHTML = `${costo.toFixed(2) + "€"}`;
    } else if (eta == 'maggiorenne' && km > 0) {
        let costo = (km * costo_km);
        document.getElementById('costo').innerHTML = `${costo.toFixed(2) + "€"}`;
    }
    //INSERIMENTO DATI NEL FORM DI OUTPUT
    document.getElementById('nome_utente_bigl').innerHTML = `${user_name}`;
    document.getElementById('type_offer').innerHTML = `${eta}`;
    document.getElementById('carrozza').innerHTML = `${carrozza}`;
    document.getElementById('codcp').innerHTML = `${codcp}`;
})


    /* if (button_annulla){
        button_annulla.addEventListener("click", function(){

            // RESET NOME COMPLETO IN OUTPUT
            nome_utente_bigl.innerHTML = "";
    
            // RESET TIPO DI BIGLIETTO IN OUTPUT
            type_offer.innerHTML = "";
    
            // RESET NUMERO CARROZZA IN OUTPUT
            carrozza.innerHTML = "";
    
            // RESET CODICE CP IN OUTPUT
            codcp.innerHTML = "";
    
            // RESET PREZZO BIGLIETTO TOTALE IN OUTPUT
            costo.innerHTML = "";

        })
    } */
    
