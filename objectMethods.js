// "this": to access the object we use method this keyword

// let user = {
//   name: "John",
//   age: 30,
// };

// // user.sayHello = function () {
// //   console.log("Hello");
// // };

// // declaration
// function sayHelloo() {
//   // console.log("Hello");
// }

// // add as a method
// user.sayHelloo = sayHelloo;

// user.sayHelloo(); // Hello

// let user1 = {
//   name: "John",
//   age: 31,

//   sayHello() {
//     // console.log(this.name);
//     // console.log(this.age);
//   },
// };

// user1.sayHello();

// let user2 = { name: "John" };
// let admin = { name: "Pete" };

// function sayHi() {
//   console.log(this.name);
// }

// The value of this is evaluated during the run-time, depending on the context

let user = { name: "John" };
let admin = { name: "Admin" };

// Arrow functions don't support this keyword it will give undefined
function sayHi() {
  console.log(this.name);
}

// Add the sayHi function as a method to both user and admin objects
user.sayHi = sayHi;
admin.sayHi = sayHi;

user.sayHi();
admin.sayHi();
admin["sayHi"]();

/* 
Summary
Functions that are stored in object properties are called “methods”.
Methods allow objects to “act” like object.doSomething().
Methods can reference the object as this.
The value of this is defined at run-time.

When a function is declared, it may use this, but that this has no value until the function is called.
A function can be copied between objects.
When a function is called in the “method” syntax: object.method(), the value of this during the call is object.

*/
