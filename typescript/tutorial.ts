//! Type Annotaions
/*
//*Lets typescript know its a number
let id: number = 5;
//*Lets typescript know its a String
let company: string = "Acme Corporation";
//*Lets typescript know its a boolean
let isPublished: boolean = false;

//*Defines an array of numbers
let ids: number[] = [1, 2, 3, 4, 5];


//*Defines the value as any of the type
let ex: any = "Pedro";
let xArr: any[] = ["Pedro", 0, true];

const a = "Hello";
const b = "World";

(a: string, b: string) defines the value to be expected in the function which in this case is string
(:string) defines the return type of the functions
const concatenateValues = (a: string, b: string): string => {
  return a + b;
};

console.log(concatenateValues("Hello", "World")); //Hello Wrold
console.log(concatenateValues("5", "10")); //15

*/

//! Interfaces and Types

// (?) - Defines the optional type and will return a value or undefined
interface UserInterface {
  id: number;
  name: string;
  age?: number; // returns number or undefined

  greet(message: string): void;
}

//Follows the roadmap or blueprint from the UserInterface interface
const User: UserInterface = {
  id: 2,
  name: "Pedro",
  greet(message) {
    console.log(message);
  },
};

//Defines the type for objects

if (!User.age) {
  console.log("User has no age");
} else {
  console.log(User.age);
}

console.log(User.greet("Hello"));
