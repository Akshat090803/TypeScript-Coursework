//!Generics in TypeScript are a powerful feature that allows you to create reusable components that can work with a variety of data types while maintaining type safety. They enable you to define a function, class, or interface with a placeholder for the type, which can be specified later when the function or class is used.

//?1. Generic Functions: You can define a function that takes a type parameter. This allows the function to operate on different types without losing type information.

function identity <T> (arg:T) : T {
  return arg;
}

let output1 = identity<string>("Hello, World!"); // output1 is of type string function identity <string> (arg:string) : string
let output2 = identity<number>(42); // output2 is of type number (function identity <number> (arg:number) : number)


//! 2. Generic Interfaces: You can create interfaces that use generics, making them flexible for different types.

interface genricTest <T,U>{
  name:T,  //will get T
  age:U    //will get U
}

let output3: genricTest<string,number>={ //t=>string , u=>number
  name:"string",  
  age:20
}
console.log(output3);

//!
interface GenericIdentityFn<T> {
  (arg: T): T;     
}

const myIdentity: GenericIdentityFn<number> = (arg) => arg;
console.log(myIdentity(10)); // Outputs: 10



//!-----------------------------------------------------------------------------------------------------
//? 3. Generic Classes: You can also define classes that use generics.

class Box <T> {
  arr:T[];
  constructor(arr:T[]){
    this.arr=arr;
  }

  getArr() : T[] {
    return this.arr
  }
}

let box1=new Box <string> (["hello" , "hi" ,"how ar you"]); //class Box<string> {}
console.log(box1.getArr());

let box2=new Box<number>([20,30,40,50]); //class Box<number>{}
console.log(box2.getArr());

//?------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

//! 4. Constraints on Generics: You can impose constraints on the types that can be used with generics. This is useful when you want to ensure that a type meets certain criteria.

  
   interface Lengthwise {
       length: number;
   }

   //will take only those types which will return a number when do arg.length i.e, can accept string, arr but not number
   function logLength<T extends Lengthwise>(arg: T): void {
       console.log(arg.length);
   }

   //this cAN  be written like this also
//    function logLength<T extends {length:number}>(arg: T): void {
//     console.log(arg.length);
// }

   logLength("Hello"); // Outputs: 5
   logLength([1, 2, 3]); // Outputs: 3
  //  logLength(543);//give error as 543.length will not return a number 