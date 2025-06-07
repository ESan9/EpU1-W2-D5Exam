/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// Se si intende tutti insieme //

console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();

console.log(pets);

// Se si intende uno alla volta ma invertiti una volta che applico il metodo reitero //

for (let j = 0; j < pets.length; j++) {
  console.log(pets[j]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const primo = pets.shift(0);

pets.push(primo);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

// Una licensePlate uguale per tutti //

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "ZZB5";
}

// Se invece si intende una diversa per ognuno //

for (let i = 0; i < cars.length; i++) {
  if (i === 0) {
    cars[i].licensePlate = "ZZB5";
  } else if (i === 1) {
    cars[i].licensePlate = "ZAXC";
  } else {
    cars[i].licensePlate = "ZXCA";
  }
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const NewObj = {
  brand: "Fiat",
  model: "Panda",
  color: "yellow",
  trims: ["allure", "active"],
  licensePlate: "ZAXB",
};
cars.push(NewObj);

console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statement per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.slice(0, 1) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let t = 0;

while (t < numericArray.length - 4) {
  console.log(numericArray[t]);
  t++;
}

// Se non è compreso il 32 basta modificare in questo modo (t < numericArray.length - 5) //

// In realtà questo esercizio può risolversi in un modo più generale e probabilmente più corretto sempre escludendo il 32 ovvero: //

let z = 0;

while (numericArray[z] !== 32) {
  console.log(numericArray[z]);
  z++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const posizioniLettere = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "g":
      posizioniLettere.push(7);
      break;
    case "n":
      posizioniLettere.push(12);
      break;
    case "u":
      posizioniLettere.push(19);
      break;
    case "z":
      posizioniLettere.push(21);
      break;
    case "d":
      posizioniLettere.push(4);
      break;
  }
}

console.log(posizioniLettere);

// Questo è sicuramente il metodo più semplice, però ho dovuto contare la posizione dei caratteri manualmente //
