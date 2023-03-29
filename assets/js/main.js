let thingsToBuy = [
    
];

function add(){
    let aggiunta = prompt ("aggiungi qualcosa alla lista");
    thingsToBuy.push (aggiunta);
    

    let lista = document.querySelector('.lista');
    lista.innerHTML = '';

    let i = 0;

    while (i<thingsToBuy.length){

        lista.innerHTML += `
        <li class="element">
            ${thingsToBuy[i]}
        </li>
        `;

        i++;
}
}

function removeAll() {
    thingsToBuy = [];
    let lista = document.querySelector('.lista');
    lista.innerHTML = '';
}

function removeLast() {
    let lista = document.querySelector('.lista');
    const lastElement = lista.lastElementChild;

    if (lastElement) {
      lista.removeChild(lastElement);
    }
  
    if (thingsToBuy.length > 0) {
      thingsToBuy.pop();
    }
  }
