// Core OOP Principles

// OOP revolves around these key ideas:

// Abstraction: Hiding complex implementation details and showing only essential information to the user.  Think of a TV remote – you interact with buttons (interface) without knowing the intricate electronics inside.

// Encapsulation: Bundling data (properties) and methods (functions that operate on that data) that work on that data within a single unit (an object).  This protects data from accidental modification.

// Inheritance: Creating new classes (derived or child classes) based on existing classes (base or parent classes). The child class inherits properties and methods from the parent, promoting code reusability.

// Polymorphism:  The ability of an object to take on many forms.  A single method name can have different implementations depending on the object it's called upon.

//!class

class Country {
  lattitude:string;
  longitude:string;
  pM:string;
  name:string;

  constructor(lat:string,long:string,pM:string , name:string){
    this.lattitude=lat;
    this.longitude=long;
    this.pM=pM;
    this.name=name;
  }

  getLat():string{
    return `Lattitude : ${this.lattitude}.`;
  }

  getLong():string {
    return `Longitude : ${this.longitude}.`;
  }

  getPM():string {
    return `Prime Minister of the country is ${this.pM}.`;
  }

   getDetails=() : string =>{
      return `${this.pM} is the Prime Minister of ${this.name}. Cordinates of the  country are Lattitude:${this.lattitude} , longitude:${this.longitude}.`
   }
}

let country1= new Country("36'N","48'S","Narendra Modi","India");
console.log(country1.getLat())
console.log(country1.getLong())
console.log(country1.getPM())
console.log(country1.getDetails())



//!Acces Modifiers

//? 1. Public:
  //  - Members marked as `public` can be accessed from anywhere, both inside and outside the class.
  // ! - By default, all class members are `public` if no modifier is specified.

  class PublicExample{
      name:string; //by default access modifier is Public
      public age:number; //use public accees modifier keyword

      constructor(name:string,age:number){
             this.name=name;
             this.age=age;
      }
  }

  let ex1=new PublicExample("akshat",20);
  console.log("Public access: ",ex1.name) //aceessiblee outside the class
  console.log("public access: ",ex1.age)//accessible outside the class



  //? 2. Private:
  //    - Members marked as `private` can only be accessed within the class itself. They are not accessible from outside the class or from derived classes.
  //    - This is useful for encapsulating data and preventing external access.

  class PrivateExample{
       name:string; //public by default.This will be accesbible outside
      private age:number; //used Private accees modifier keyword 

      constructor(name:string,age:number){
             this.name=name;
             this.age=age;
      }

      getAge() : number{
        return this.age;   //?private member accesible within the class
      }
    
  }

  let ex2=new PrivateExample("akshat",20)
  console.log("Public member: ",ex2.name); //as name was public it is accessible
  // console.log("private member: ",ex2.age); //?as age was private it is un-accessible and we are not getting its suggestion and will get error if try to access it

  //calling getAge public func to access age
  console.log("Accesing private member through getAge func: ",ex2.getAge())


  // ?3. Protected:
  //  - Members marked as `protected` can be accessed within the class and by derived classes (subclasses), but not from outside the class.
  //  - This is useful when you want to allow subclasses to access certain properties while keeping them hidden from the rest of the code.

  class Parent {
    protected lastName: string;

    constructor(lastName: string) {
        this.lastName = lastName;
    }
}

class Child extends Parent {
    public fullName: string;

    constructor(firstName: string, lastName: string) {
        super(lastName);
        this.fullName = `${firstName} ${this.lastName}`; // Accessible in subclass
        //! this.lastName is the protected member of parent class which is accesbile in sub class
    }
}

class Baby extends Child {
  constructor(firstName: string, lastName: string) {
      super(firstName, lastName);
  }

  public getLastName(): string {
      // !This will cause an error because lastName is protected and Baby is not a subclass of Parent
      //? return this.lastName; // Error: Property 'lastName' is protected
      return "Last name is not accessible here.";
  }
}

//!Protected only accesbile with in a class or in direct child classes


const child = new Child("John", "Doe");
console.log(child.fullName); // Output: John Doe
// console.log(child.lastName); // Error: Property 'lastName' is protected so can't accesed outside



//!Important-----------
class Example1{

  constructor( public name:string , private age:number){
  }
  //!by writing like this we make code shorter
  //!This constrictor constructor( public name:string , private age:number){} can be interpreted as
  //? public name:string
  //? private age: number
//    constructor (name:string,age:number){
//          this.name=name;
//          this.age=age1;
// }

}

//!-------------------------------------------------------------------------------------------------------
//?-------------------------------------------------------------------------------------------------------


//! Get and set (getter and setters)

// Getters and setters are special methods in object-oriented programming that allow you to control access to an object's properties. They provide a way to get (retrieve) and set (update) the values of private or protected properties while encapsulating the logic for those operations.

// Here's a breakdown of how they work:

//? 1. Getter: A method that retrieves the value of a property. It allows you to access the value of a private or protected property from outside the class.

// ?2. Setter: A method that updates the value of a property. It allows you to define custom logic when setting a property, such as validation or transformation.


class Get_Set{

  private _radius:number;  //radius is a private memebr which can't be accessed outside the class

  constructor(rad:number) {
    this._radius=rad;
  }
  
  //!getter to access private memebr _radius outside the class

  get radius():number{
     return this._radius;
  }

  //!setter set (update) the values of private or protected properties
  set radius(value : number) {

    if(value>=0){
      this._radius=value;
    }
    else{
      console.error("Radius can't be negative");
    }
  }

}

const ex4=new Get_Set(40);
console.log("radius",ex4.radius); //accessing private member even outside the class using get 
ex4.radius=55; //updating the private memebr outside the class
console.log("Update radius: ",ex4.radius);

ex4.radius= -67; //?error("Radius can't be negative");
console.log("Checking radius same or update: ",ex4.radius); //radius not uodated to -67; Radius is still 55

//?-----------------------------------------------------------------------------------------------------
//!---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//!Abstraction
// Abstraction in TypeScript is a fundamental concept that allows developers to simplify complex systems by focusing on the essential features while hiding the unnecessary details. It helps in managing complexity and enhancing code readability and maintainability.

//? In TypeScript, abstraction can be achieved using interfaces and abstract classes. Here’s a breakdown of both:

interface AnimalAbst{
   name:string,
   sound(): string
}

class Dog implements AnimalAbst{
  //This two must be in a class and we can add different property also
  name:string='Dog';
  sound(): string {
      return "Bow Bow!"
  }

  species:string;
  constructor (spe:string){
    this.species=spe
  }
}

class Cat implements AnimalAbst{
  name:string="Cat";
  sound(): string {
      return "Meow Meow"
  }
}

const dog = new Dog("Golden Retriever");
console.log(dog.name); // Outputs: Dog
console.log(dog.sound()); // Outputs: Bow Bow!

const cat=new Cat();
console.log(cat.name);
console.log(cat.sound())


//!using abstract class


// 2. Abstract Classes: An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed. It can contain both abstract methods (which must be implemented by subclasses) and concrete methods (which have an implementation). This allows you to provide some default behavior while still enforcing a structure.

 
   abstract class Shape {
       abstract area(): number;
       
       display(): void {
           console.log("Displaying shape");
       }
   }

   class Rectangle extends Shape {
       constructor(private width: number, private height: number) {
           super();
       }

       area(): number {
           return this.width * this.height;
       }
   }

   const rect:Rectangle = new Rectangle(10, 5);
   console.log(rect.area()); // Outputs: 50
   rect.display(); // Outputs: Displaying shape
 

//    In this example, `Shape` is an abstract class with an abstract method `area()`. The `Rectangle` class extends `Shape` and provides its implementation for the `area()` method.

// Using abstraction in TypeScript helps to create a more organized and modular codebase, making it easier to manage and scale applications. It allows developers to work with high-level concepts without getting bogged down by the details of implementation


//! See here we used serialNumber , ip_add as getter and setter and not a member varaible 
interface Laptops{
  serialNumber:number;
  ip_add:string;
  processor:string;
}

class Laptop implements Laptops {

  constructor (private _serialNumber:number , public processor:string,private _ip_add:string){}

  get serialNumber():number {
    return this._serialNumber
  }

   set serialNumber(arg:number) {
    this._serialNumber=arg;
  }

  get ip_add():string {
    return this._ip_add
  }

   set ip_add(arg:string) {
    this._ip_add=arg;
  }


}

