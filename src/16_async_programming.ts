// Asynchronous programming in TypeScript (TS) allows you to write non-blocking code, which is essential for operations that take time, such as network requests or file reading. This helps keep your application responsive.
//!Using promises
//!Using async await

// Using promises in TypeScript is a common way to handle asynchronous operations. Promises represent a value that may be available now, or in the future, or never. Here's how you can use promises along with the `.then()` method for handling results.

// 1. Creating a Promise: You can create a new promise using the `Promise` constructor. Inside the constructor, you define the asynchronous operation.

//!return type is Promise<string> as we are returning a promise so Promise<> and in Promise it is returning string so Promise<string>
function fetchData(arg1: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    if (arg1) {
      setTimeout(() => {
         resolve("Data fetched successfully");
      }, 2000);
    } else {
      reject(new Error("Promise failed"));
    }
  });
}

// 2. Using `.then()`: Once you have a promise, you can use the `.then()` method to handle the resolved value and `.catch()` to handle any errors.

fetchData(false)
.then((data) => {
  console.log(data);
})
.catch((err)=>{
  console.log("error: ",err.message);
})


// 3. Chaining Promises: You can chain multiple `.then()` calls to handle a series of asynchronous operations.
function fetchMoreData(): Promise<string> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("More data fetched!");
      }, 1000);
  });
}

// fetchData(true)
// .then((data1)=>{
//   console.log(data1);
//   return fetchMoreData();
// })
// .then((data2)=>{
//   console.log(data2);
// })
// .catch((err)=>console.log(err.message))
// .finally(()=>{
//   console.log("Task Completed")
// })

//!Promise.all
// To use `Promise.all` with `.then`, you'll want to create multiple promises and then wait for all of them to resolve. `Promise.all` takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved or rejects if any of the promises reject.

const promises = [
  fetchData(true),
  fetchData(true),
  // fetchData(false) // This will cause Promise.all to reject
  fetchMoreData()
];

// Promise.all(promises)
//   .then((results) => {
//     console.log("All promises resolved:", results);
//   })
//   .catch((err) => {
//     console.log("One or more promises failed:", err.message);
//   });


  //!--------------------------------------------------------------------------------------------------
  // ?-----------------------------------------------------------------------------------------
  
  //!Using async await
  // 1. Async Functions: You can define an asynchronous function using the `async` keyword. 
  //? This function will always return a promise.
  //if async func is returning string at last than return type of async func willl be Promise<string>
  //if async func returning number than return type Promise<number>
  //if async func returnig number arr , return type will be promise<number[]>
  // if async func returning nothing than its return type will be Promise<void>

  //!Exmaple
  async function fetchData12(): Promise<string> {
    return "Data fetched";
}


//? 2. Await Keyword: Inside an async function, you can use the `await` keyword to pause the execution until a promise is resolved.

// async function getData() : Promise<void> {
//   const data = await fetchData(true);
//   console.log("async await func" , data); // Outputs: Data fetched
// }
// getData();

//?3. Handling Errors: You can use try-catch blocks to handle errors in async functions.
// async function getData12() : Promise<void>{
//   try {
//       const data = await fetchData(false);
//       console.log(data);
//   } catch (err) {
//       console.error("Error fetching data:", err);
//   }
// }

// getData12();


//!Promise.all

function task1() : Promise<string> {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve( "Task1")
},4000)
  })
}

function task2() : Promise<string> {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve ("Task2")
},3000)
  })
}

async function resolveAll() : Promise<[string,string]>{
  const[data1 , data2] : [string,string] = await Promise.all([task1(),task2()]);
  return [data1,data2];
}

resolveAll()
.then((data:[string,string])=>{
     console.log("data1: ",data[0]);
     console.log("data2: ",data[1]);
})
.catch((err)=>{
  console.log("Error in resolving")
})