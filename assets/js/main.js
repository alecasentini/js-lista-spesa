let thingsToBuy = [
    'mele',
    'arance',
    'latte',
    'insalata',
    'patatine'
];

let i = 0
let lista = document.querySelector('.lista')
while (i<thingsToBuy.length){
    
    lista.innerHTML += `
    <li>
        ${thingsToBuy[i]}
    </li>
    `
    i++;
}