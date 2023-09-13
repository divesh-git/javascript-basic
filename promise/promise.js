// 1.basic example of promise 

const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('Async task is complete')
    resolve()
    },2000)
})
promiseTwo.then(()=>{
    console.log('Promise consumed')
})


// 2. Fetch API with then and catch 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data)
})
.catch((error)=>console.log("ERROR"))


// 3.async await method 
async function getUserData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("ERROR")
    }

}
getUserData()



// 4. Promise basic,chaining of then 

const promiseOne = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error =false;
   if(!error){
         resolve({username:"Divesh",password:12345})
     }else{
         reject("ERROR in Login ")
   }
        },1000);

 })
 .then((userdata)=>{
 console.log(userdata)
 return userdata.username
 })
 .then((userName)=>{
     console.log(userName);
 })
 .catch((error)=>console.log("E:-",error))

// 5. Same above problem with Async await

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true;
if(!error){
     resolve({username:"Divesh",password:12345})
 }else{
     reject("ERROR in Login ")
}
    },1000);

})

async function resolvePromise (){
    try {
        let response = await promiseOne
    console.log(response)
    } catch (error) {
        console.log("E:-",error)
    }
    
}
resolvePromise()

//6. Promise all waits for all fulfillment or the first rejection
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

    // 7. example of Promise all()
    const promiseSix = Promise.resolve(20);
    const promiseSeven =24;

const promiseResult = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        try {
            resolve("I am  promise three")
        } catch (error) {
            reject("ERROR in the promise three")
        }
   
    },2000)
})
Promise.all([promiseSix,promiseSeven,promiseResult]).then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log("E:-",error);
})



//8. Promise allSettled()

Promise.allSettled([
    Promise.resolve("the first value to be resolved"),
    new Promise((resolve)=>{
        resolve("second promise to be resolved")
    }),
    Promise.reject("Promise is rejected")
]).then((value)=>{
    console.log(value)
})









