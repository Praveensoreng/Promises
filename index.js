console.log("working");

//Q1. Write one example explaining how you can write a callback function ?


function greet(name, myFunction) {
    console.log('Hello world');  
    myFunction(name);
}
function sayName(name) {
    console.log('Hello' + ' ' + name);
}
setTimeout(greet, 2000, 'John', sayName);
//------------------------------------------------------------------

//Q2. Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

setTimeout(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
        setTimeout(()=>{
            console.log(3);
            setTimeout(()=>{
                console.log(4);
                setTimeout(()=>{
                    console.log(5);
                    setTimeout(()=>{
                        console.log(6);
                        setTimeout(()=>{
                            console.log(7);
                        },7000)
                    },6000)
                },5000)
            },4000)
        },3000)
    },2000)
},1000)


//Q3.Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7


const myPromise = (x,y) =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(y());
        },x)
    })
}
myPromise(1000,()=>{
    console.log(1);
}).then(()=>{
    return myPromise(2000,()=>{
        console.log(2);
    })
}).then(()=>{
    return myPromise(3000,()=>{
        console.log(3);
    })
}).then(()=>{
    return myPromise(4000,()=>{
        console.log(4);
    })
}).then(()=>{
    return myPromise(5000,()=>{
        console.log(5);
    })
}).then(()=>{
    return myPromise(6000,()=>{
        console.log(6);
    })
}).then(()=>{
    return myPromise(7000,()=>{
        console.log(7);
    })
})


//Q4.Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

const myPromise1 = (val) =>{
    return new Promise((resolve,reject)=>{
           if(val == 'yes'){
               resolve('Promise Resolved')
           }
           else{
               reject('Promise Rejected')
           }
    })
}
myPromise1('yes').then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})

//Q5.Create examples to explain callback function

function sum(a,b,callback){
  console.log(`sum of ${a} and ${b} is ${a+b}`);
  callback(a,b);
}

function multiply(x,y){
 console.log(`Product of ${x} and ${y} is ${x*y}`);
}

sum(4,5,multiply)


//Q6.Create examples to explain callback hell function

//sum
//difference
//multiply
//division
//remainder

const sum =(x,y,callback)=>{
    console.log(`sum = ${x+y}`);
    callback();
    
}
const difference = (a,b,callback)=>{
  console.log(`difference = ${a-b}`);
  callback();
}
const multiply = (c,d,callback)=>{
   console.log(`product =${c*d}`);
   callback();
}
const division = (e,f,callback)=>{
   console.log(`Quotient = ${e/f}`);
   callback();
}
const remainder = (g,h,callback)=>{
   console.log(`Remainder = ${g%h}`);
   callback();
}
const calculator = (x,y)=>{
    sum(x,y,()=>{
        difference(x,y,()=>{
            multiply(x,y,()=>{
                division(x,y,()=>{
                    remainder(x,y,()=>{

                    })
                })
            })
        })
    })

}
calculator(8,4);

//Q.7 Create examples to explain promises function

let myPromise3 = new Promise((resolve,reject)=>{
    //Promise to buy car
    let income = 50000;
    if(income>=50000){
        resolve("I can buy a car");
    } 
    else{
        reject("Not enough money to buy car");
    }
});
myPromise3.then((message)=>{
    console.log("Let's go!" + " " +message);
}).catch((message)=>{
    console.log("Sorry!" + message);
})


//Q8.Create examples to explain async await function
async function tryingPromises(){
    console.log("Inside the function");
    const response = await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("users resolved");
    return users;
}
console.log("Before Calling the function");
let data = tryingPromises();
console.log("After calling the function");
console.log(data);
data.then((res)=>{
    console.log(res);
});
console.log("End of code");




//Q9.Create examples to explain promise.all function

let cleanRoom = () =>{
    return new Promise((resolve,reject)=>{
        resolve()
    });
};

let removeGarbage = () =>{
    return new Promise((resolve,reject)=>{
        resolve()
    });
};

let winIceCream = () =>{
    return new Promise((resolve,reject)=>{
        resolve()
    });
};

Promise.all([cleanRoom(),removeGarbage(),winIceCream()]).then(()=>{
    console.log("All work finished");
})




