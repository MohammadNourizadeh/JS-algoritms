let input;
let kharejGhesmat = input/10;
let dahgan;
let yekan;

if (input >= 10 && input <= 99 && kharejGhesmat > 0) {
    yekan = input % 10;
    dahgan = parseInt(kharejGhesmat);

    if(yekan === dahgan){
        console.log(input);
    }
}else{
    console.log('choose a number between 10 ... 99');
}

