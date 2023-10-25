let sum = 0; 

for(let i=1 ; i<=900 ; i++){
    if(i % 9 === 0){
        sum += i;
        console.log(i);
    };    
};

console.log('sum of numbers that are visible by 9' , '-->' , sum);