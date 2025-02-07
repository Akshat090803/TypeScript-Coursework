//In TypeScript, literals refer to fixed values that represent a specific type. TypeScript supports several types of literals, including string literals, number literals, boolean literals, and more. Additionally, //?TypeScript introduces the concept of literal types, which allow you to specify exact values that a variable can hold. Here’s a detailed look at the different types of literals in TypeScript:


//!1. String Literals: These are fixed string values. You can define a variable that can only take a specific string.

type StringLiteral = "Hello" | "Hi" | "Hey"
let lit1 :StringLiteral="Hey"; //valid
lit1="Hi" //valid
lit1="Hello"//valid
// lit1="morning" //?invalid as lit1 can take one of the value among "hello" , "Hi" , "Hey"


//! we can give like this also
let lit2 : 'Hello' | "hi" | "Hey";
lit2="Hello"


//! 2. Number Literals: Similar to string literals, you can specify that a variable can only take specific numeric values
type Direction = 1 | 2 | 3;

let dir: Direction;
dir = 1; // Valid
// dir = 4; // Error: Type '4' is not assignable to type 'Direction'.


//! 3. Boolean Literals: You can create types that only allow the boolean values `true` or `false`.
type IsActive = true | false;

let isActive: IsActive;
isActive = true; // Valid
// isActive = "yes"; // Error: Type '"yes"' is not assignable to type 'IsActive'.


// !4. Literal Types with Objects: You can also use literal types with object types to specify exact shapes.
type Point = { 
  x: 0 | 1 | 2,   //x can have value either 0 or 1 or 2
   y: 0 | 1 | 2  //y can have value either 0 or 1 or 2
  };

   let point: Point;
   point = { x: 1, y: 2 }; // Valid
   // point = { x: 3, y: 1 }; // Error: Type '{ x: 3; y: 1; }' is not assignable to type 'Point'.


   //!5 Mixed Literals (combine various literals)

   let lit5 : StringLiteral | Direction | Point | "Akshat" | 32 | { name:string , age:number};
   lit5="Hello" ; //valid  (value form choices of StringLiteral)
   lit5="Akshat"; //valid

   lit5=2;//valid (value form chpices of Direction )

   lit5={ x:2 , y:1} ; //valid (value from choices of Point)

   lit5={
    name:"Aksaht",
    age:20
   } //valid


  //  lit5= 54; //invalid 54 is not assignable to type StringLiteral | Direction | Point | "Akshat" | 32 | { name:string , age:number};

