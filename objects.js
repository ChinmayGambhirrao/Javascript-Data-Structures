// Objects
// Lets create an empty object

// let user = new Object(); // object constructor syntax
// let user1 = {}; // object literal syntax

// // Now lets add some properties to the object

// let user2 = {
//   // an object
//   name: "John", // by key "name" store value "John"
//   age: 30, // by key "age" store value 30
// };

// // Lets access the properties of the object
// console.log(user2.name);
// console.log(user2.age);

// // For multiword property names we have to use quotes

// let user3 = {
//   name: "John",
//   age: 30,
//   "likes birds": true,
// };

// console.log(user3["likes birds"]);

// // [] notation in objects and when to use
// let user4 = {
//   name: "Chinmay",
//   age: 24,
// };

// let key = console.log("What do you want to know about the user?");

// console.log(user4.age);

// // Property value shorthand

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// let user5 = makeUser("John", 39);
// console.log(user5.age);

// // in operator

// console.log("age" in user5);

// // for..in loop
// // Syntax

// // for(key in object) {
// //   // executes the body for each key among object properties
// // }

// // Example

// let user6 = {
//   name: "John",
//   age: 40,
//   isAdmin: true,
// };

// for (let key in user6) {
//   console.log(key);
//   console.log(user6[key]);
// }

// // Lets study Order in objects

// let codes = {
//   91: "India",
//   41: "Switzerland",
//   44: "Great Britain",
//   1: "USA",
// };

// for (let code in codes) {
//   console.log(code); // 1 41 44 91 as these are integers it will go in ascending sorted order
// }

// // on the other hand if the keys are not integers

// let user7 = {
//   name: "John",
//   surname: "Smith",
//   age: "50",
// };

// for (let key in user7) {
//   console.log(key); // name surname age
// }

// // To solve the phone codes issue the best thing we can do is convert the integer to number by adding + sign

// let codesUpdated = {
//   "+91": "India",
//   "+41": "Switzerland",
//   "+44": "Great Britan",
// };

// for (let code in codesUpdated) {
//   console.log(code); // +91 +41 +44
// }

// Tasks
/*  Q1) Hello, object
Write the code, one line for each action:
1) Create an empty object user
2) Add the property name with the value John
3) Add the property surname with the value Smith
4) Change the value of the name to Pete
5) Remove the property name from the object
*/

let user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);

/* 
Q2) Write the function isEmpty(obj) which returns true if the object has no properties false otherwise.
*/

let isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

/* 
Q3) We have an object storing salaries of our team:
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key]; // here salaries[key] access the value associated with the current key
}

console.log(sum);

// Q4) Create a function multiplyNumeric(obj) that multiplies all numeric property value of obj by 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

let multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
};

multiplyNumeric(menu);
console.log(menu);
