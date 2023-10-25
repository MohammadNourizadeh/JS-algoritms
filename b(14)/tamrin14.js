let fName = 'Mohammad';
let balance = 400000;
let frequencyOfVisits = 3;
let bardasht = 200;
let variz = 4000;

for (let i = 1; i <= frequencyOfVisits; i++) {
    balance -= (variz + bardasht)
    
}

const person = {
    firstName: fName ,
    yourBalance: balance ,
    variziHa: frequencyOfVisits*variz ,
    bardashtHa: frequencyOfVisits*bardasht,
}
console.log(person);


