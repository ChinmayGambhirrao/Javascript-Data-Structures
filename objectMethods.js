// "this": to access the object we use method this keyword

let user = {
  name: "John",
  age: 30,
};

// user.sayHello = function () {
//   console.log("Hello");
// };

// declaration
function sayHello() {
  console.log("Hello");
}

// add as a method
user.sayHello = sayHello;

user.sayHello(); // Hello

let user1 = {
  name: "John",
  age: 31,

  sayHello() {
    console.log(this.name);
    console.log(this.age);
  },
};

user1.sayHello();
