let fInput;
let sInput;

if(fInput % 3 === 0 && sInput % 3 === 0){
    console.log(fInput , sInput);

}else if(fInput % 3 === 0){
    console.log(fInput);

}else if(sInput % 3 === 0){
    console.log(sInput);
}else{
    console.log('none of them are divisible');
}