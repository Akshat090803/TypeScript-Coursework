//? Utility types in TypeScript are built-in types that help you manipulate and transform types in a convenient way. They allow you to create new types based on existing ones, making your code more flexible and reusable. Here are some of the most commonly used utility types:

// 1. Partial: This type makes all properties of a given type optional.

   interface User12 {
       id: number;
       name: string;
       email: string;
   }

   const updateUser: Partial<User12> = {
       name: "Alice"
   };

//    In this example, `updateUser` can have any combination of the properties of `User12`, and they are all optional.

// 2. Required: This type makes all properties of a given type required.

   interface User13 {
       id?: number;
       name?: string;
       email?: string;
   }

   const user13: Required<User13> = {
       id: 1,
       name: "Alice",
       email: "alice@example.com"
   };


//    Here, `user13` must include all properties of `User13`, even if they were optional in the original definition.

// 3. Readonly: This type makes all properties of a given type read-only, preventing them from being modified.

   interface User14 {
       id: number;
       name: string;
   }

   const user14: Readonly<User14> = {
       id: 1,
       name: "Alice"
   };

   // user14.name = "Bob"; // This will cause an error as all property are readonly
//    In this case, trying to change `user14.name` would result in a compile-time error.

//? 4. Record: This type creates an object type with specific keys and values.

   type UserRoles = "admin" | "user" | "guest";
   const roles: Record<UserRoles, number> = {
       admin: 1,
       user: 2,
       guest: 3
   };
//    Here, `roles` is an object with keys of type `UserRoles` and values of type `number`.

// 5. Pick: This type allows you to create a new type by picking specific properties from an existing type.

   interface User15 {
       id: number;
       name: string;
       email: string;
   }

   type UserName = Pick<User15, "name">;
   const userName: UserName = {
       name: "Alice"
   };

   //this way also correct
//   const userName: Pick<User15,"name"> = {
//     name: "Alice"
// };

//    In this example, `UserName` only includes the `name` property from the `User15` interface.
//if we try to add id or email property in userName it will give error as userName is supposed to have only name (bcoz only name is picked)

// ?6. Omit: This type creates a new type by omitting specific properties from an existing type.

   interface User16 {
       id: number;
       name: string;
       email: string;
   }

   type UserWithoutEmail = Omit<User16, "email">;

   const userWithoutEmail: UserWithoutEmail = {
       id: 1,
       name: "Alice"
   };

//    Here, `UserWithoutEmail` includes all properties of `User` except for `email`.


//!Other Utility Types are---->

// 1. Extract: This utility type is used to extract types from a union that are assignable to a specific type. It is useful when you want to filter out certain types from a union.

   type A = string | number | boolean;
   type B = Extract<A, string | number>; // B is now string | number
//    In this example, `B` will only include `string` and `number` from the union type `A`.

// 2. Exclude: This type is the opposite of `Extract`. It allows you to exclude types from a union that are assignable to a specific type.

   type C = string | number | boolean;
   type D = Exclude<A, boolean>; // B is now string | number

//    Here, `B` will only include `string` and `number`, excluding `boolean`.

// 3. ReturnType: This utility type extracts the return type of a function type. It is helpful when you need to know what type a function returns without explicitly specifying it.

   function getUser() {
       return { id: 1, name: "Alice" };
   }
   type UserReturnType = ReturnType<typeof getUser>; // UserReturnType is { id: number; name: string; }
   let bvb:UserReturnType={
    id:12,
    name:"Aks"
   }

//    In this case, `UserReturnType` will be the type of the object returned by the `getUser` function.

// 4. ConstructorParameters: This utility type extracts the parameter types of a constructor function type. This is useful when you need to know what parameters a class constructor expects.


   class User17 {
       constructor(public id: number, public name: string) {}
   }

   type UserConstructorParams = ConstructorParameters<typeof User17>; // UserConstructorParams is [number, string]
  
   let C_params:UserConstructorParams=[2,"aksahat"]; //tuple

//    Here, `UserConstructorParams` will be a tuple type representing the types of the parameters that the `User` constructor accepts.



//5 Parameters
function hhb(arg1:number,arg2:string){
  //defination
}

type FuncParamter=Parameters<typeof hhb>//FuncParamter is a tuple of [number,string]
let params:FuncParamter=[4,"aksaht"]

