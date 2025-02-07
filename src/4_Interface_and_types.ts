// //!Interface 
// In TypeScript, an interface is a powerful way to define the structure of an object. It allows you to specify the properties and their types that an object should have. Interfaces help in creating a contract for classes or objects, ensuring that they adhere to a specific structure.

//? 1. Defining an Interface: You can define an interface using the `interface` keyword followed by the name of the interface and the properties it should have.

interface Person{
   name:string, //we can give ; instead of , also no error
   age:number,
   greet():void,
}

//?Now Person can be used as ac custom datatype

const John : Person={
  name:"John",
  age:20,
  greet(){
    console.log("Hello ",this.name);
  }
};

const Tom : Person={
  
  age:22,
  name:"Tom",
  greet(){
    console.log("How are you ",this.name)
  },
};

// !if we not use interface than we have to do it like this
// const John : {name:string , age:number}={
//   name:"John",
//   age:20
// };

// const Tom :  {name:string , age:number}={
//   name:"Tom",
//   age:22
// };

//!using  Interface with functions
//declaring interface for function
interface Mathfunc {
  (x:number , y:number) : number,
  //it means function will take two prameter of type number and return number
}

let add:Mathfunc=(x,y)=>{
      return x+y;
}  
console.log("addition of two no. : ",add(3,5));
//see in interface defination  we take x and y but here u , n but no erro is there
let subtract:Mathfunc=(u,n)=>{
   return u-n;
}
console.log("subtraction of two numbers: ",subtract(6,3));

function greetings(person:Person) :void{
      console.log("hello, how are you ", person.name);
}
greetings(John);


//! 4. Extending Interfaces: You can create a new interface that extends an existing one, adding more properties while inheriting the original ones.

interface Employees extends Person{
  employeeId: number;
}

//now Employees interface has property of Person interface as well as its own property 
//it is like inheritance

//!extending an existing one
interface Employees {
  company:string
} //this will not override property of Employees defined before

//we add one more property company name also in Employee
//?now Employees interface has following property-->
// {
//   name:string, 
//   age:number,
//   greet():void,
//   employeeId: number;
//   company:string

// }

//!Note one of the differnece b/w type and interface is that in type we can't extends update , existing type like we did with employee
// interface Employees {
//   company:string
// }

let emp1:Employees={
  name:"aksaht",
  age:20,
  greet(){
    console.log("How are you ",this.name)
  },
  employeeId:1,
  company:"synpsys"
}

console.log(emp1);


//?------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

//!Type Alias
// In TypeScript, a type alias allows you to create a new name for a type. This can be useful for simplifying complex types, making your code more readable, or creating reusable types. You can use the `type` keyword to define a type alias.

//?Basic type alias

type Name=string;
type Age=number;

let p1:Name="aksaht";
let age1:Age=20;

//! 2. Object Type Alias: You can also create type aliases for object types, similar to interfaces.

type Phone = {
  ram:number,
  rom:number,
  proccessor:string
}

let phone1:Phone={
  ram:8,
  rom:128,
  proccessor:"dimensity"
}

// console.log(phone1)

//! 3. Union Types: Type aliases can be used to define union types, which allow a variable to hold multiple types.

type NumberOrString = string | number;

let choice: NumberOrString;
choice = "Hello"; // valid
choice = 42; // valid

//! 4. Function Type Alias: You can define a type for a function signature using type aliases.

type GreetFunction = (name: string) => string;//in interface we do (name: string) : string;

   const greet: GreetFunction = (name) => {
       return `Hello, ${name}`;
   };


  //!Extension
  //in type you can't use extends just like in interface
  //?here we have to use intersection ( & ) for extension

  type Industry ={
    industryType:string,
    capacity:Number,
  }

  //extension using intersection (& )
  type Automobile = Industry & {
     name:string,
     location:string
  }

  //Now automobile type has property of Industry type as well as its own property
  let honda:Automobile={
    name:"Honda",
    industryType:"auto-mobile industry",
    capacity: 3200,
    location:"Kota"
  }

  console.log(honda);

  //!In type alias we can extends existing class
  // type Automobile ={
  //   city:string
  // }
  //?This will give error as typeAlias is a substitye name so it can't be duplicate 
  //error : Duplicate identifier Autombile (Automobile is already defined above)



  //!Optional and readonly properties
  // 5. Optional and Readonly Properties: You can define properties as optional (using `?`) or as read-only (using `readonly`).
  //!you can give this in both type alias and interface

  interface Animal {
     readonly name:string, //?name is read only property , means we can't change/update value of name
    category:string,
    weight ?: number //!weight is optional property means it is not compulsary to give this  
  }

  let animal1:Animal={
    name:"Elephant",
    category:"carnivores",
    //see we didn't passed weight and there is no error
  }

  //?trying to update name(read only property ) to tiger 
  // animal1.name="Tiger"; //!error : can't assign to name as it is a readonly property

  //see but we can change category as it is not a read only 
  animal1.category="hernivore";

  console.log(animal1)

  //!similar can be done with type alias
//?With type alias
  // type readonly validity = number; //?error
  // type validity =readonly number; //!error : read only modifier is only applicable to array,tupple ,object literal type

  type Planet={
    readonly name:string, //!Name is readOnly
    distance:number,
    otherName ?: string, //?other name is optional
  }

  let planet1:Planet={
    name:"Venus",
    distance:320000
    //we din't passed otherName
  }

  console.log(planet1)


  //!we can use Type like this also
  type status="active" | "loading" | "pending";
  //status is type alias which will take only one of the above three  states

  let currStatus:status="pending";

  type units="kg" | "pounds" | "lbs";
  let wt_unit:units="lbs";
  //let  wt_unit : units ="quintal";// error : as wt_unit is of type units .It can take only value among the lg , lbs,pounds


  //!Intersection (&)
  let bbc : {name:string , age:number }  & {gender : string} ={
    name:"AKshat",
    age:20,
    gender:"M"
  }   
  //bbc will have all three property
  // we intersect two types