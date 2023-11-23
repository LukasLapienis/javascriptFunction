'use strict'

// 1

function hello() {
    let greet = "hello";
    return greet;
}
    
function greeting(vardas, greet) {
    console.log(`${greet}, ${vardas}!`);
}
    
greeting("Lukas", hello());
greeting("Baris", hello());

// 2)

let sum;
function bigger(sk1, sk2) {
    if (sk1 == sk2) {
        console.log("skaiciai lygus");
        sum = sk1 + sk2;
    }
    else if (sk2 > sk1) {
        sum = "Antrasis skaičius yra didesnis";
    }
    else if (sk1 > sk2) {
        sum = "pirmas skaičius yra didesnis";
    }
    else {
        sum = "klaida";
    }
    return sum;
}

console.log(bigger(5,5));    

// 3)

function fizzAndBuzz(word) {
    if (word === "fizz") {
        console.log("bazz");
    }
    else if (word === "buzz") {
        console.log("fizz");
    }
    else {
        console.log("Please provide fizz or buzz");
    }
}

fizzAndBuzz("buzz");

// 4)

function isTriangle(x, y, a) {
    let ats;
    if ((x + y > a) && (x + a > y) && (y + a > x)) {
        ats = "trikampis gali buti sudarytas";
    }
    else {
        ats = "trikampis negali buti sudarytas";
    }
    return ats;
}

console.log(isTriangle(10, 10, sum))

// 5)

function plotas() {
    let figurosPlotas;
    let figura = prompt("ar tai kvadratas ar staciakampis?")
    if (figura == "kvadratas") {
        let krastine = parseInt(prompt("iveskite krastines ilgi:"));
        figurosPlotas = krastine * krastine;
    }
    else if (figura == "staciakampis") {
        let krastineX = parseInt(prompt("iveskite x krastines ilgi:"));
        let krastineY = parseInt(prompt("iveskite y krastines ilgi:"));
        figurosPlotas = krastineX * krastineY;
    }
    else {
        figurosPlotas = ("blogai ivesti duomenys");
    }
    return figurosPlotas;
}

alert(plotas());

// 6)

function isSeven(x) {return x === "7" ? true : false;}

console.log(isSeven(7));

// 7

const isEqual = (x, y) => x === y;

console.log(isEqual(true, 1));

// 8)

const isBigger = (prob, prize, pay) => prob * prize > pay;
console.log(isBigger(1,2,3));

// 9)

let min = 5;
const minToSec = (minutes) => minutes * 60;
let sec = minToSec(min);


console.log(`${min} min = ${sec} s`);

// 10

function calculator() {
    let veiksmas = prompt("koki veiksma norite atlikti? pasirinkimai: sudetis, atimtis, daugyba, dalyba").toLowerCase();
    let sk1 = parseInt(prompt("iveskite pirma skaiciu"));
    let sk2 = parseInt(prompt("iveskite antra skaiciu"));
    let rezultatas;
    if (veiksmas == "sudetis") {
        rezultatas = sk1 + sk2;
    }
    else if (veiksmas == "atimtis") {
        rezultatas = sk1 - sk2;
    }
    else if (veiksmas == "daugyba") {
        rezultatas = sk1 * sk2;
    }
    else if (veiksmas == "dalyba") {
        rezultatas = sk1 / sk2;
    }
    else {
        rezultatas = "blogai ivesti duomenys";
    }
    return alert(rezultatas);
}

calculator();
