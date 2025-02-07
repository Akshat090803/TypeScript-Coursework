//In TypeScript, `keyof` is a powerful operator that allows you to create a type that represents the keys of an object type. It can be very useful when you want to create functions or types that are flexible and can work with different object shapes.

interface PersonkeyInterface{
  name: string;
  age: number;
  address: string;
}

type personKeys=keyof(PersonkeyInterface); // name | age | string

let ccd:personKeys="age"; // can take one value among "name" | "age " | "address"


//! 3. Using keyof in Functions: You can use `keyof` to create functions that operate on specific properties of an object.


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {  
    return obj[key];
}

const person: PersonkeyInterface = { name: "Alice", age: 30, address: "123 Main St" };

// Using the getProperty function
const personName = getProperty(person, "name"); // "Alice"
const personAge = getProperty(person, "age");   // 30
// const personrandom = getProperty(person, "phone");   // error


//as we are passing person , as T , than k will be name | age | address
