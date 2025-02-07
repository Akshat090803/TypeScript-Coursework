//!Functions

//!Regular function
function addition(x: number, y: number): number {
  return x + y;
}
console.log("Addition result : ",addition(4,9));

//!function expression
const divide = function (x:number , y:number) : number | string {
      //  if(y===0) return "Can't divide by 0";   //string return 

       return x/y;  //Number return 
}
//See here we used union type as a return of function as func can return string as well as number
console.log("Division result: ",divide(6,3));
console.log("Division result: ",divide(8,0));


//!Arrow functions
const multiply = ( x: number , y: number) : number => {
         return x*y;
}

console.log("Multiplication result: ",multiply(4,3));


//!Optional and default parameters in functions

//!Optional parameter

function greet1 (name: string , greeting ?: string) : string { //greeting parameter is a optional parameter 
  //as greeting parameter is option its type greeting ?: string  can be ellaborated as => greeting : string | undefined
   
  return (greeting)? `${greeting} ${name}` : `No greetings for you ${name}`;
}
//?in This function , greeting parameter is a optional parameter 

console.log(greet1("Akshat" , "Hello")); //!greet1 with greeting value passed
console.log(greet1("Akshat")); //!greet1 without optional parameter Greeeting 
// Hello Akshat //Output 1
// No greetings for you Akshat  //output-2

//!Default Paramter
function greet2 (name: string , greeting : string = "Hi") : string {
   
  return `${greeting} ${name}`;
}
//function with greeteing parameter has default value = "Hi"

console.log(greet2("Akshat" , "Hello! How are you")); //!with greeting var passed
console.log(greet2("Akshat")); //!greet2 without  Greeeting parameter passed
// Hello! How are you Akshat //Output -1
// Hi Akshat //output-2


//!Function overloading
// Function overloading in TypeScript allows you to define multiple signatures for a single function. This means you can have the same function name but with different parameter types or counts. TypeScript will then determine which function signature to use based on the arguments passed to the function.

//? Here’s how to implement function overloading in TypeScript step by step:

//? 1. Define Function Signatures: Start by defining the different signatures for the function. Each signature describes a different way the function can be called.

//? 2. Implement the Function: After defining the signatures, implement the function. Inside the implementation, you can use type checking to handle the different types of arguments.


function getLen(value:string) : number; //function signature for string defined
function getLen(value:any[]) : number; // function signature for array defined
function getLen(value:any) : number{ //implementing func //Note here we take type any .If we take type string or other any[] , it will give error
  return value.length;
}

console.log(getLen("akshat"));//6
console.log(getLen([4,5,6,7,8,9,0]));//7
console.log(getLen(["KAhsat" , "jain"]));//2


// Step 1: Define function signatures
function greet3(person: string): string;
function greet3(person: string, age: number): string;

// Step 2: Implement the function
function greet3(person: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${person}. You are ${age} years old.`;
    } else {
        return `Hello, ${person}.`;
    }
}

//getSum overLoad function

//!func defination
function getSum(val1:number,val2:number) :number;
function getSum(val1:number,val2:number , val3:number) :number;
function getSum(val1:number,val2:number , val3:number , val4:number) :number;

//function implementations
//as val1 and val2 is common in all func defination , they are neccessary so they will not be taken as optional parameter
//val3 and val4 are not common in all func defination , so they will be taken as optional
function getSum(val1:number,val2:number , val3 ?: number , val4 ?: number) : number{

  if(val4!==undefined && val3!=undefined) return val1+val2+val3+val4; //case of 3rd func defination
  else if(val4===undefined && val3!=undefined) return val1+ val2+ val3;//case of 2nd func definiation
  else return val1+val2;//case of 1st func defination
}

console.log("sum of 2 values ",getSum(4,5));
console.log("sum of 3 values ",getSum(4,5,3));
console.log("sum of 4 values ",getSum(4,5,3,1));



//! Rest operator (...)
// The rest operator in TypeScript is a powerful feature that allows you to represent an indefinite number of arguments as an array. This operator is particularly useful when you want to accept a variable number of parameters in a function.

function getSumRestOperator(...values:number[]) : number {   //?all arguments will collected in number array named values
    return values.reduce((total:number,val)=>{
      return total+val;
    },0);
}

console.log("Using rest Operator ----------------------")
console.log("sum of 2 values  argument taken using restOperator",getSumRestOperator(4,5));
console.log("sum of 3 values argument taken using restOperator",getSumRestOperator(4,5,3));
console.log("sum of 4 values argument taken using restOperator",getSumRestOperator(4,5,3,1));


//!string version
function Greetings_RestOperator(greeting:string, ...values:string[]) : void {   //?all arguments will collected in String array named values
     
  values.forEach((name:string)=>console.log(`${greeting} ${name}`));
}

Greetings_RestOperator("Hello! How are you " , "Akshat","Manuj" ,"Lakshay");