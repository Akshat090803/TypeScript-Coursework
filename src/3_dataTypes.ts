//! Types in  Ts


//!built In types in JS -> 

//!note
//?during the type of iniitialization if we not give type it will not give error as variable will automatically inferr a type based on the value given during iniitalization
//for example
// let num1:number=20;
// let num2=30; //this will not give error as num2 will automatically inferr type number as value provided during initialzation is a number

//? 1. Basic Types:

//!    - `number`: Represents both integer and floating-point numbers. Example: `let age: number = 25;`

let num1 : number =20; 
let num2=30; //this will not give error as num2 will automatically inferr type number as value provided during initialzation is a number
console.log(`num1:${num1} , num2:${num2}`);

//!    - `string`: Represents text data. Example: `let name: string = "John";`

let str1 : string ="Akshat";
let str2="jain"; //automatically infer type string as value in initialization is a string
console.log(`str1:${str1} , str2:${str2}`);

//!    - `boolean`: Represents a true or false value. Example: `let isActive: boolean = true;`

let bool1 : boolean =true;
let bool2= false; //automatically infer type bool as value in initialization is a bool
console.log(`bool1:${bool1} , bool2:${bool2}`);

//!    - `null`: Represents the absence of a value. Example: `let value: null = null;`

let null_1 : null =null;
let null_2=null; //automatically infer type null as value in initialization is null
console.log(`null_1:${null_1} , null_2:${null_2}`);



//!    - `undefined`: Represents a variable that has been declared but not assigned a value. Example: `let notAssigned: undefined;`

let und1 : undefined =undefined;
let und2=undefined; //automatically infer type undefined as value in initialization is a string
console.log(`und1:${und1} , und2:${und2}`);



// let und5 : undefined;
// und5=56; //!this will gicve error as und5 has type undefined we can't assign number to it

// let null_3:null; 
// null_3=4; //!this will also give error

//? 2. Array Types:
//    - You can define arrays of specific types. Example: `let numbers: number[] = [1, 2, 3];` or `let names: Array<string> = ["Alice", "Bob"];`

let arr1 : number[] =[1 , 2 ,3]; //arr of type number
let arr2=[4,5,6]; //automaticatlly infer type number[]

let arr3 : [number,string] =[3,"akshat"]; //?arr which takes only two value(both value needs to be present) and first value will nbe of type number and second value will be of type string

console.log("arr1: ",arr1);
console.log("arr2: ",arr2);
console.log("arr3: ",arr3);

//?  3. Object Type:
//    - The `object` type represents a non-primitive type. Example: `let obj: object = { key: "value" };`

let obj1 : object ={ name:"akshat" , age:20 , city:"Kota"};

let obj2={name:"Manuj" , age:25 , city : "Kota"}; //automatcialyy infer type object form the value of initilaization

let obj3 : {name:string , age:number} ={name:"Rozi" , age:21}; 
//?obejct which will take only two keys(both keys need to present and key name will be same) and first key has value of type string and second key has value of type number

console.log("obj1: ",obj1);
console.log("obj2: ",obj2);
console.log("obj3: ",obj3);


//!This above 3 categories datatypes are present in Js also
//?------------------------------------------------------------------------------------------------------

//!In Typescript we get some extra types also .They are---

// !4. Tuple Types:
//?    - Tuples allow you to define an array with fixed numbers of elements with specific types. Example: `let user: [string, number] = ["Alice", 30];`

let coordinates3d:[number,number,number]=[30,67,89]; 
console.log("tuple: ",coordinates3d);

//?IMP
let xyz:[number,string]=[4,"akshat"];
//if we try to give more than two ele it will give error for eg:
// let xyz:[number,string]=[4,"akshat",9]; //?will give error as only two ele were supposed
//?but if we do something like this , it will not give error
xyz.push(9);
console.log("xyz tuple push 9: ",xyz);

//! 5. Enum Types:
// ?   - Enums allow you to define a set of named constants. Example:

//?previously we do something like this using const
// const red : number= 2;
// const green : number= 4;
// const blue : number= 5;
// let c1=red;
// let c2=green;
// let c3=blue;
//?and if we want to export all of them we have to export them individually
//!with enum we can do like this
//?without const
    //  enum Color {
    //    Red,
    //    Green=4,
    //    Blue,
    //  }
    //?with const
     const enum Color {
       Red,
       Green=4,
       Blue,
     }

     //differnce b/w const and without const enum is in js file i.e, how they trasnpile to js

     let c: Color = Color.Green;
     console.log("c: ",c)

     //?Notes
     //if we not pass any value to Red,Green ,Blue , there value will be index i.e, Red=0,Green=1,Blue=2
     //if we only give Number value to first one i.e, red=2 , than value of green will automatically gets to 3 and Blue=4
     //but if we give number value to only second i.e, Green , suppose Green=4 than next to it will have 5 i.e, Blue=5 but red will be 0 only (index) as if number is given as value they the next will acquire value of successor+1
     //similary if value was given only to Blue than red and green will have value of their respective index only as they are before green so green value not pass to them
     //?above cases are only when you pass Number as a value
     //!but if you pass string as value , you have to give value to all const 


//! 6. Any Type:
// ?   - The `any` type allows you to opt-out of type checking. Example: `let randomValue: any = 42; randomValue = "Now I'm a string";`

let anyVar : any=4;
console.log("anyVar : ",anyVar);
anyVar="akshat";
console.log("anyVar : ",anyVar);
//?this wil not give error of static typing as we passed first Number than string to same variable  because , anyVar has type any means it can take any datatype ;

let cap1;  //this decalrarion also has type any measn cap1 is of type any
console.log("cap1 : ",cap1); //!output will be undefined
console.log("typeof cap1: ",typeof(cap1)); //undefined as no value pass measn undefined value is there so cap1 type will be undefined
cap1=10; //number is passed so now any type will be number
console.log("typeof cap1: ",typeof(cap1));
cap1="aksagt";
console.log("typeof cap1: ",typeof(cap1));

//! 7. Void Type:
// ?   - The `void` type is used for functions that do not return a value. Example:

     function logMessage(message: string): void {
       console.log(message);
     }

     function print2(mess:string) : void{
       console.log(mess);
       return ;
     }

     function print3(mess:string) : void{
      console.log(mess);
      return undefined;
    }

    function printMessage(mess:string) {
      console.log(mess);
    }

     console.log(printMessage("sa"))


//! 8. Never Type:
// ?   - The `never` type represents values that never occur, often used for functions that throw errors or have infinite loops. Example:
//      ```typescript
     function throwError(message: string): never {
       throw new Error(message);
     }
     
    //  while(true){
    //   console.log(1);
    //  }
 

    //! 9 unKnown type
    // In TypeScript, the `unknown` type is a safer alternative to the `any` type. It represents any value but requires type checking before performing operations on it. This means that you can assign any value to a variable of type `unknown`, but you cannot use that value until you assert its type or perform some form of type checking.

  
    let value: unknown;
    value = 5;                // OK
    value = "Hello";         // OK
    value = true;            // OK
    value = { name: "John" }; // OK
  
 
// ? 2. Type Checking: Before you can use the value, you must check its type.
    let value2: unknown;
    value = "Hello";
 
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // OK, value is confirmed to be a string
    }

    //!Advantages: The main advantage of using `unknown` over `any` is that it forces you to perform type checks, which can help prevent runtime errors and make your code safer and more predictable.   


    //! Union types
    //?a variable can take value of more than one datatype
    //? In TypeScript, a union type allows you to define a variable that can hold multiple types of values. This is useful when you want to allow a value to be one of several different types. You can create a union type by using the pipe (`|`) symbol between the types.

    // 1. Defining a Union Type: You can define a union type by specifying the types separated by the pipe symbol.

   let value3: string | number;
  // In this example, `value` can be either a `string` or a `number`.

//? 2. Assigning Values: You can assign values of any of the specified types to the variable.

   value3 = "Hello"; // OK
   value3 = 42;      // OK
   // value = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.


//? 3. Type Checking: When using a union type, you often need to check the type of the variable before performing operations on it to ensure type safety.

//!this checking of types is also known as type narrowing
   let val4: string | number;
   val4 = 7;

   if (typeof val4 === "string") {
       console.log((val4 as string).toUpperCase()); // OK, value is a string
   } else {
       console.log((val4 as number).toFixed(2)); // This block won't execute since value is a string
   }
 

//? 4. Using with Functions: Union types can also be used in function parameters.

//!the checking of types is also known as type narrowing
   function printValue1(value: string | number) {
       if (typeof value === "string") {
           console.log("String value:", value);
       } else {
           console.log("Number value:", value);
       }
   }

   printValue1("Hello"); // Output: String value: Hello
   printValue1(100);     // Output: Number value: 100
 

//? 5. Combining with Other Types: Union types can also be combined with other types, including arrays and objects.
   type StringOrNumber = string | number;
   let values: StringOrNumber[] = ["Hello", 42, "World"];
 
//! 10. Custom Types:
//    - You can define your own types using `interface` or `type`. Example:
//      ```typescript
//      interface Person {
//        name: string;
//        age: number;
//      }
//      let person: Person = { name: "Alice", age: 30 };
//!We will se it later in file 4, interface and types 



//!Type Inference 
// Type Inference:
// Type inference is the automatic determination of the type of a variable by the TypeScript compiler based on the value assigned to it. This means you don’t always have to explicitly declare types; TypeScript can figure them out for you.

// Here are some key points about type inference:

// 1. Automatic Type Assignment: When you assign a value to a variable, TypeScript infers the type from that value.

//    ```typescript
//    let num = 10; // TypeScript infers 'num' as a number
//    let str = "Hello"; // TypeScript infers 'str' as a string
//    ```

// 2. Function Return Types: TypeScript can infer the return type of a function based on the return statements inside it.

//    ```typescript
//    function add(a: number, b: number) {
//        return a + b; // TypeScript infers the return type as number
//    }
//    ```

// 3. Contextual Typing: Type inference can also occur in specific contexts, such as when dealing with callback functions or event handlers.

//    ```typescript
//    window.onmousedown = function(event) {
//        console.log(event.button); // TypeScript infers 'event' as MouseEvent
//    };


//! Type Assertion:

// Type assertion is a way to tell the TypeScript compiler that you know more about the type of a variable than it does. This is useful when you want to override inferred types or when you have a variable that could be one of several types.

// Here’s how type assertion works:

// ?1. Using `as` Keyword: You can use the `as` keyword to assert a type.

//    ```typescript
//    let someValue: unknown = "This is a string";
//    let strLength: number = (someValue as string).length; // Assert that 'someValue' is a string
//    ```

// ?2. Angle Bracket Syntax: Alternatively, you can use angle brackets for type assertion, although this is less common in JSX contexts.

//    ```typescript
//    let someValue: unknown = "This is a string";
//    let strLength: number = (<string>someValue).length; // Assert that 'someValue' is a string
//    ```

//? 3. When to Use: Type assertions should be used with caution. They can be helpful when you are certain about the type but can lead to runtime errors if used incorrectly.

//! In summary, type inference allows TypeScript to automatically determine types based on assigned values, while type assertion provides a way to explicitly specify a type when you know more than the compiler does. Understanding both concepts is essential for effectively managing types in TypeScript.
