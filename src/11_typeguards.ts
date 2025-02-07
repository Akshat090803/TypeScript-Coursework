//?Type guards in TypeScript are a powerful feature that allows you to narrow down the type of a variable within a conditional block. This helps TypeScript infer the specific type of a variable, enabling you to access properties and methods that are specific to that type without causing type errors.

//1. Using the `typeof` Operator: You can use the `typeof` operator to check the type of a variable at runtime. This is particularly useful for distinguishing between primitive types.

function printValue(value: number | string) {
  if (typeof value === "string") {
      console.log("String value:", value.toUpperCase());
  } else {
      console.log("Number value:", value.toFixed(2));
  }
}

printValue("hello"); // Output: String value: HELLO
printValue(10);      // Output: Number value: 10.00



// 2. Using the `instanceof` Operator: This operator is used to check if an object is an instance of a specific class or constructor function.

class Dog1 {
  bark() {
      console.log("Woof!");
  }
}

class Cat1 {
  meow() {
      console.log("Meow!");
  }
}

function makeSound(animal: Dog1 | Cat1) {
  if (animal instanceof Dog1) {
      animal.bark();
  } else {
      animal.meow();
  }
}

const dog1 = new Dog1();
const cat1 = new Cat1();
makeSound(dog1); // Output: Woof!
makeSound(cat1); // Output: Meow!



// 3. User-Defined Type Guards: You can create your own type guard functions that return a boolean and use the `is` keyword to specify the type.

interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}
//return true if animal is a fish else false

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
      animal.swim();
  } else {
      animal.fly();
  }
}


//!
function isString(arg:any) : arg is string {
  return typeof arg==='string';
}

function checkType(arg:number | string) {
  if(isString(arg)) console.log("Argument is a string");
  else console.log("Argument is number")
}

checkType(23); //Argument is number
checkType("akshat")//Argument is a string



//!Working with inetrfaces
interface zx{
  name:string
}

interface xz{
  age:number
}

function checkInterface(arg: zx | xz) {
  if ('name' in arg) {
      console.log("zx");
  } else {
      console.log("xz");
  }
}

// Example usage:
const object1: zx = { name: "Alice" };
const object2: xz = { age: 30 };
