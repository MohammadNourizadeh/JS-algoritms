let n;
let m = n;
let total = 0;
let kharejGhesmat = n/10;

if(kharejGhesmat === 0){
    total += m%10;

}else{
    while (kharejGhesmat > 0) {
        total += m%10;
        m = kharejGhesmat;
        kharejGhesmat = m/10;
    }
}

if (n%m === 0) {
    console.log(n ,'be majmoe arghamash bakhsh pazir ast');
}else{
    console.log(n ,'be majmoe arghamash bakhsh pazir nist');
}

console.log('majmoe argham ',parseInt(total));
