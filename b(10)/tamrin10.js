let add =0;

for(let i = 2 ; i < 1000 ; i++){
    for(let j = 1 ; j<=i ; j++){
        if(j % i === 0){
            add += 1;
        }
    }

    if(add === 2){
        console.log(i);
        add=0
    }
}