/*
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

//*Defines the type for objects

if (!User.age) {
  console.log("User has no age");
} else {
  console.log(User.age);
}

//console.log(User.greet("Hello"));

interface ProductInterface {
  id: number;
  name: string;
  price: number;
}

const Product: ProductInterface = {
  id: 1,
  name: "Magnolia Chicken",
  price: 500,
};
*/

/*
//! Union = Combines multilple types
//Defining your own types
type IdFieldType = string | number; //can be reusable in your entire project

const printID = (id: IdFieldType) => {
  console.log(`ID:${id}`);
};

printID("123");
printID(1234);

//!Intersecting two types
//Means combining types
//type combinedType = Type1 & Type2;

interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & UserIdentity;

const signContract = (employee: Employee) => {
  console.log(
    "Contract signed by :" + employee.name + " with email : " + employee.email
  );
};

signContract({
  name: "Windyl",
  creditScore: 500,
  id: 1,
  email: "windylmonton@gmail.com",
});
*/

//!Enums
//Used to define named constants
//Implements code reusability

//they are different types of errors
// unauthorized , user doesn't exist , wrong credentials , internal server error

//Fixed values for error messages
enum LogInError {
  Unauthorized = "unauthorize",
  NoUser = "no user",
  WrongCredentials = "wrongcredentials",
  Internal = "Internal",
}

const printErrorMsg = (error: LogInError) => {
  if (error === LogInError.Unauthorized) {
    console.log("User not authorized");
  } else if (error === LogInError.NoUser) {
    console.log("No User Was Found");
  } else if (error === LogInError.WrongCredentials) {
    console.log("Wrong username/password");
  } else {
    console.log("Internal Server Error");
  }
};

printErrorMsg(LogInError.NoUser);
