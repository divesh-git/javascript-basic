// function myFun(){
//     console.log("My first")

// }
// myFun();

// Promise all waits for all fulfillment or the first rejection
let data = Promise.all([

new Promise ((resolve,reject)=>{
    setTimeout(()=>{
    resolve("I am Promise one")
    },2000)
}),
 new Promise ((resolve,reject)=>{
    setTimeout(()=>{
    resolve("I am Promise two")
    },1000)
}),
new Promise ((resolve,reject)=>{
    setTimeout(()=>{
    resolve("I am Promise three")
    },4000)
})
])
data.then((response)=>{
console.log(response);
})
.catch((error)=>{
console.log("E:-",error)
})

// const promiseOne = Promise.resolve(20);
// const promiseTwo =24;

// const promiseThree = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         try {
//             resolve("I am  promise three")
//         } catch (error) {
//             reject("ERROR in the promise three")
//         }
   
//     },2000)
// })
// Promise.all([promiseOne,promiseTwo,promiseThree]).then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log("E:-",error);
// })

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });


// const p = Promise.all [1,2,3,4];
// const p1 =Promise.all([1,2,3,4,Promise.resolve(9)])
// const p2 =Promise.all([1,2,3,4,Promise.reject(10)])
// setTimeout(()=>{
//     console.log(p)
//     console.log(p1)
//     console.log(p2)
// })


// All values are non-promises, so the returned promise gets fulfilled
// const p = Promise.all([1, 2, 3]);
// // The only input promise is already fulfilled,
// // so the returned promise gets fulfilled
// const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// // One (and the only) input promise is rejected,
// // so the returned promise gets rejected
// const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// // Using setTimeout, we can execute code after the queue is empty
// setTimeout(() => {
//   console.log(p);
//   console.log(p2);
//   console.log(p3);
// });

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }

// const p1 = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p1 is resolved")
//     })
// })

// const p2 = Promise.resolve("p2 is resolved")
// const p3 = Promise.reject("p3 is rejected")
// const p =[p1,p2,p3]
// Promise.allSettled(p).then((value)=>{
   
//         console.log(value)
//     })

