let hoqooq = 30000;
let mazad;

if(hoqooq < 50000){
    console.log('hoqooq =' , hoqooq);
    console.log('maliat =' , 'moaf');

}else if(hoqooq>50000 && hoqooq<100000){
    mazad = hoqooq - 50000;
    hoqooq -= mazad*(10/100);
    console.log('maliat =' ,(mazad*(10/100)));

}else{
    mazad = hoqooq - 100000;
    hoqooq -= mazad*(15/100);
    console.log('maliat =' ,(mazad*(15/100)));
}