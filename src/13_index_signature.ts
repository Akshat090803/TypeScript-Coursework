//In TypeScript, an index signature is a way to define the types of properties of an object when you don't know the names of the properties in advance. This is particularly useful when you're working with objects that can have dynamic keys.

//1. Basic Syntax: The syntax for an index signature looks like this:

//? [key: string]: type;
// Here, `key` is the name you give to the dynamic key, and `type` is the type of the values associated with those keys.



//!Example
interface StringMap{
  [key:string] : string
}

let myMap:StringMap={ 
  name:"Akshat", //dynamically declaring property name
  address:"Chhawani,kota",
  email:"abc@gmail.com"
}

//!accesing proprties
console.log(myMap.name); //way-1
console.log(myMap["name"]); //way-2


//!example 2
interface NumberMap{
  [key:number]:string
}

//with keys of number type there are 2 ways
//way-1
let myMap2:NumberMap={
      485:"Aditya",
      486:"akshat",     
}

console.log(myMap2[485]);
console.log(myMap2[486]);
// console.log(myMap2.486); //this will give error with key of type number



// 3. Multiple Index Signatures: You can also define index signatures for different types of keys, but only one index signature per key type is allowed.


// interface MultiMap {
//     [key: number]: string; // Index signature for number keys
//     [key: string]: number; // ?This will cause an error
// }
//becuse we can use only one index-signature at a time
