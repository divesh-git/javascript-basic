// forEach doesnt return any value

let myArr =["JavaScript","php","python","C++"]
myArr.forEach((item)=>{
    console.log(item)
})

// 1. Filter in Array 
let myNum1 =[1,2,3,4,6,8,9,10]
let currentNum1 =myNum1.filter((value)=> value >6)
console.log(currentNum1);

// 2. Scope bhitra condition dinu paryoo bhanay return 
let myNum2 =[1,2,3,4,6,8,9,10]
let currentNum =myNum2.filter((value)=>{
 return value > 8
})
console.log(currentNum);

// 3. Yoo condition lai nai filter use na gare forEach garnay ho bhanay 

let myNum3 =[1,2,3,6,7,8,9,10]
let newNum =[]
myNum3.forEach((num)=>{
if(num >7){
    newNum.push(num)
}
})
console.log(newNum);


// 4. Filter the genra from the given Array
let users = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
    genre:'Friction'
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
    genre:'War'
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
    genre:'Friction'
}];



// 5. Problem solved by Filter method()
let ages = users.filter((user) => user.age >= 21)

console.log(ages);

let data1 = users.filter((userdata)=>{
   return  userdata.genre==='Friction'
})
console.log(data1);

// 6. Above problem by forEach Method()
let newData =[]

users.forEach((data)=>{
data.genre === 'Friction' 
newData.push(data)

})
console.log(newData)

// 7. genre and age>=20
let data =users.filter((bok)=>{
    return bok.genre==='Friction' && bok.age >=20;
    })
    console.log(data);


// 8. Map in Array

let myNom = [1,2,3,4,5,6]
let newNom = myNom.map((nom)=>{
return nom *2
}).map((nom)=>{
return nom+2
})
console.log(newNom);


