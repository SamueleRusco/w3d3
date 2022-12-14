///******* SELETTORI ********//

const aggiungiElementoADiv = () => {
  //quando chiamata, crea un nuovo elemento div da aggiungere come field

  //1. CREO NUOVO ELEMENTO (nodo)
  const nuovoDiv = document.createElement("div"); // mi sta creando un nuovo elemento html (div)

  //2. modifico il nuovo elemento (aggiungo testo, aggiungo una o più classi)
  nuovoDiv.innerText = "ciao sono il nuovo div!"; //passa da essere un div vuoto ad essere pieno |NON è ATTACCATOALLA PAGINA HTML è UNA VARIABILE NELLA FUNZIONE|

  //3. devo ricordarmi di agganciare il nuovo elemento creato al DOM, selezionando un elemento padre al quale agganciarlo
  //3.1 seleziono prima il padre
  const padre = document.getElementById("lista-elementi");
  //3.2 appendo il nuovo div al padre (lista elementi)
  padre.appendChild(nuovoDiv);
};

const cambiaColoreAh1 = () => {};
