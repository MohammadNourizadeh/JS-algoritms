let input =120;

let sefr = 0;
let zoj = 0;
let fard = 0;

for(let digits of input){
    if (digits % 2 === 0) {
        zoj++
    }else if(digits % 2 === 1){
        fard++
    }else if (digits === 0) {
        sefr++
    }
}
console.log(sefr);
console.log(zoj);
console.log(fard);