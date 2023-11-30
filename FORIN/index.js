'use strict'

let person = {
    name: "sam",
    age: 33,
    job: "officer",
    hobbies: {
        1: "swimming",
        2: "reading",
        3: "skating",     
    },
}

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}

for (let key in person.hobbies) {
    let hobby = person.hobbies[key];
    console.log(hobby);
}

for (let key in person) {
    if (key === "hobbies") {
        for (let hobby in person[key]) {
            console.log(`my hobby is: ${person[key][hobby]} `)
        }
    }
}

// 1)

const leFamily = {
    me: 33,
    father: 55,
    mother: 53,
    sister: 32,
    brother1: 28,
    brother2: 25,
    aunt: 61,
    uncle: 60,
    cousin1: 37,
    cousin2: 37,
    grandfather1: 79,
    grandmother1: 77,
    grandfather2: 81,
    grandmother1: 80,
    cat: 3,
    dog: 7,
    parrot: 2, 
};
let count = 1
for (let key in leFamily) {
    if (leFamily[key] > 65) {
        count = count ++;
        }
    }
console.log(count)

