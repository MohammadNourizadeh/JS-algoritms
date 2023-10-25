let padash = 0;
let bestShop = 0;
let shop = [
    {
        number: 1,
        monthlyIncome: 2000,
        yearlyIncome: 24000,
    },
    {
        number: 2,
        monthlyIncome: 41000,
        yearlyIncome: 500000,
    },
    {
        number: 3,
        monthlyIncome: 1000,
        yearlyIncome: 12000,
    },
    {
        number: 4,
        monthlyIncome: 58000,
        yearlyIncome: 700000,
    },
    {
        number: 5,
        monthlyIncome: 50000,
        yearlyIncome: 600000,
    },
]
shop.filter((item) => {
    if (item.yearlyIncome <= 500000) {
        padash = item.yearlyIncome * (3 / 100)
        console.log('forooshgah', item.number, ':', 'padash forooshgah ==>', padash, '...', 'mizan foroosh dar sal ==>', item.yearlyIncome);

    } else if (500000 < item.yearlyIncome < 700000) {
        padash = item.yearlyIncome * (5 / 100)
        console.log('forooshgah', item.number, ':', 'padash forooshgah ==>', padash, '...', 'mizan foroosh dar sal ==>', item.yearlyIncome);
    }


    if (item.yearlyIncome > bestShop) {
        bestShop = item.number
    }

})
console.log('the best shop ==>',bestShop);


