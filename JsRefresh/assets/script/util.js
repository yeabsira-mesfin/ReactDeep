// const {apiKey} = require('./main')
// console.log(apiKey)
// function combine(a,b,c){
//     return (a*b) / c;
// }
// const combined = combine(10,5,25);
// console.log(combined)

// const numberArray = [1,2,3,4,5]
// function transformToObjects(numberArray) {
 
//     return numberArray.map(num => ({"val": num}));
// }
 

// const arrMap = transformToObjects(numberArray);

// console.log(arrMap)

// const user1 = ["Yeabu", "Mesfin"]
// const user2 = ["Yeaspira", "Lala"]

// const combinedar = [...user1, ...user2]

// console.log(combinedar)

// console.log(firstName)
// console.log(lastName)

const user = {
    name: 'Yeab',
    age: 24
}

// function deObj({name,age}){
//     return `My name is ${name} and I am ${age} years old`
// }

// console.log(deObj(user))

const extendUser ={
    isAdmin:true,
    ...user
}

console.log(extendUser)