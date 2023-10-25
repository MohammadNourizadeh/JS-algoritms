let tedad =0;
let ageTedad =0;
let fieldOfStudyIdTedad = 0;
let darsad = 0;
let users = [
    {
        name: 'mohammad',
        userNumber: 1,
        diplom: 1,
        age: 21,
        fieldOfStudyId: 24,
        gender: 'man'
    },
    {
        name: 'ali',
        userNumber: 2,
        diplom: 3,
        age: 20,
        fieldOfStudyId: 24,
        gender: 'man'
    },
    {
        name: 'sara',
        userNumber: 3,
        diplom: 2,
        age: 25,
        fieldOfStudyId: 44,
        gender: 'woman'
    },
    {
        name: 'amir',
        userNumber: 4,
        diplom: 2,
        age: 35,
        fieldOfStudyId: 44,
        gender: 'man'
    },

    {
        name: 'narges',
        userNumber: 5,
        diplom: 1,
        age: 25,
        fieldOfStudyId: 25,
        gender: 'woman'
    },
    {
        name: 'reza',
        userNumber: 6,
        diplom: 1,
        age: 19,
        fieldOfStudyId: 24,
        gender: 'man'
    },

]

users.filter(item => {
    if (item.gender === 'man' && item.fieldOfStudyId === 24) {
        tedad++
    }
})
console.log('number of men with field Id 24 ==>',tedad);

users.filter(item => {
    if (item.age < 18) {
        ageTedad++
    }
})
console.log('number of users more than 18yo ==>',ageTedad);

let tedad24 = users.filter(item => {
    if(item.fieldOfStudyId === 24){
        fieldOfStudyIdTedad++
    }
})
darsad = (fieldOfStudyIdTedad / users.length) * 100

console.log(darsad , 'percent');