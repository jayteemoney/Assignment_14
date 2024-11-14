/*practice 1
Implement a basic timer with setInterval that stops after 5 seconds.
1. define a function that uses setInterval to print the time every second
2.track elapsed time in a variable
3. use ClearInterval to stop the timer after 5 seconds
 */
// solution

// setting a setInterval function that printts time every second
const intervalId = setInterval(()=>{
    console.log("display after one second");   
},1000);

// using clearInterval function within the setTimeout to stop the timer after 5sec
setTimeout(()=>{
    clearInterval(intervalId);
    console.log("interval cleared");
    
},5000);



/* practice 2
Chain two promises to perform two dependent asynchronous operations.
1.create two functions that return promises,with the second depending on the first
2.chain the promises using .then() to handle the first operation,then the second
3. log the results of each operation
 */
// solution

// creating two asynchronous functions
function firstFun(){
    return new Promise((resolve) =>{
        setTimeout(() =>resolve("first function completed"),1000);  
    });
}
function secondFun() {
    return new Promise((resolve) =>{
        setTimeout(() =>resolve("second function completed"),1000);
    });
}
// chaining them using the then()
firstFun()
.then((result) =>{
    console.log(result);
    return secondFun();
})
// logging the results of each operation
.then((result) =>{
    console.log(result);
    console.log("all task completed");
});


/*practice 3
Write a function using setTimeout that prints "hello" after 2 seconds
1.define a function named printHello
2.Inside the function, use setTimeout
3.Set the delay to 2000milliseconds (2seconds)
4.Within setTimeout log "hello" to the console
 */


// solution
function printHello(){// defining function 
    setTimeout(() =>{// using setTimeout inside the function 
        console.log("Hello"); //logging "Hello" within the setTimeout   
    },2000); // setting delay
}
printHello();


/*practice 4
write an async function that throws an error and handle it with try...catch.
1. define an asynch function
2. use throw() to simulate an error within the function 
3. write the function call in the try...catch block 
4.log the error in the catch block
 */


// solution
async function MyAsyncFunction() { //defining async function 
    try {
        throw new Error("cannot be divided by 0") //   using throw() to simulate error
    } catch (error) {
        console.error(`type of error: ${error}`); //log error in catch block   
    }
   
}
MyAsyncFunction();


/*practice 5
Demonstrate the use of await to pause code execution until a promise is fulfilled
1.Define an async function
2.Inside the function, create a promise that resolves after a delay
3.Use await to wait for the promise to be resolved
4.log a message after the await statement
 */


// solution
async function fetchData() { //defining async function 
    return new Promise((resolve) =>{
        setTimeout(() =>resolve("data fetched"), 2000);
    }); // a promise that resolves after a delay   
}
async function fetchDataAndDisplay() {
    const data = await fetchData(); // waiting for promise to be resolved
    console.log("fetching data"); //logging a message after the await statement 
    console.log(data);
    
}
fetchDataAndDisplay();



/*practice 6
Use promise.all() to execute two promises cocurrently and log both results.
1.Create two functions that return promises with different delays
2.Use promose.all() with the two functions
3.Log the results once both promises have resolved
 */


// solution
// defining first function
function fnc1(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("result from function 1"), 1000);
    });
}

// defining second function
function fnc2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("result from function 2"), 2000);
    });
}
// using promise.all() for both functions
Promise.all([fnc1()], [fnc2()])
.then((results) =>{
    console.log(results); //  logging results  
});
 

/*practice 7
Implement error handling with .catch() in a promise chain
1. Create a function that returns a promise, with the chance of rejecting.
2.Chain .then() to handle the resolve state
3.Attach a catch() to handle any errors and log an error message
 */

// solution
function dataFetch() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
          if(Math.random() < 0.5){
            resolve('fetch data successfuly');
          }else{
            reject(new Error('failed to fetch data'));
          }
        }, 2000);
    });
}
dataFetch()
.then((data) =>{
    console.log(data);
})
.catch(() =>{
    console.error(`error:, ${error}`);
    
});