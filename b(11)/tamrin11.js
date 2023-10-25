let input = 44;
let total = 0;
let tedad = 0;

for(let i = 0 ; i <= input ; i++){
    if(i%4 ===0){
        if (input % i === 0) {
            console.log(i);
            total += i;
            tedad++;
        }
    }
}
console.log('total ==>' , total);
console.log('tedad ==>' , tedad);