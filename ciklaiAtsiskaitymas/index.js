'use strict'

// 1)

function findNegative() {
    
    for (;;) {
        let numberInput = prompt('iveskite skaiciu, jeigu bus neigiamas atspausdinsiu ir baigsiu cikla')
        if (numberInput < 0) {
            console.log(numberInput);
            break;
        }
    }
}

findNegative();

// 2)

function printAllExcept3(begin,end) {
    for (let i = begin; i <= end; i ++) {
        if (i%3 == 0) {
            continue;
        } 
        console.log(i);
    }
}

printAllExcept3(1,100);

// 3)

function toCube(begin,end) {
    for (let i = begin; i <= end; i ++) {
        let cube = i * i * i;
        console.log(i,cube);
    }
}

toCube(2,12);

// 4)

const persons = {
    jonas: 30,
    petras: 26,
    ona: 45,
    maryte: 36,
    antanas: 77,
    "teta zita": 86,
};

for (let key in persons) {
    console.log(key,persons[key]);
}

// 5)

let moksleivis = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 25,
    miestas: "Kaunas",
};

let countObject = 0;

for (let count in moksleivis) {
    countObject ++
}

console.log(countObject);

// 6)

let splitSentence = prompt("iveskite sakini ir isskirsiu atskirais zodziais").split(" ");
for (let word of splitSentence) {
    console.log(word);
}

// 7)

let sentence = prompt("iveskite sakini ir pasakysiu kiek simboliu");
let characters = 0;

for (let character of sentence) {
    characters ++;
}

console.log(`simboliu kiekis su ciklu: ${characters}, simboliu kiekis su length: ${sentence.length}`);

// 8)


function printAllEven(begin,end) {
    while (begin <= end) {
        if (begin % 2 == 0) {
            console.log(begin);
        }
        begin ++;
    }
}

printAllEven(20,50)

// 9)

while (true) {
    let sk = parseInt(prompt("iveskite skaiciu, jeigu bus nelyginis nutrauksiu cikla"))
    if (isNaN(sk)) {
        alert("blogai ivestas skaicius");
    }
    else if (sk % 2 !== 0) {
        alert("Ivestas nelyginis skaiciu");
        break;
    }
}

// 10)

let suma = 0;
let sk;

do {
    sk = parseInt(prompt("Iveskite skaiciu, jei teigiami sudesiu, jei nulis baigsiu cikla ir isspausdinsiu visu ivestu teigiamu skaiciu suma"));
    if (isNaN(sk)) {
        alert("blogai ivestas skaicius");
    }
    else if (sk > 0) {
        suma += sk;
    }
} while (sk !== 0)
console.log(suma);
